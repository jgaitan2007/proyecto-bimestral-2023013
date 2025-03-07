import Order from './facturas.model.js';
import Product from '../gestionProductos/productos.model.js';

export const editarFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const { products } = req.body;

        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Factura no encontrada' });
        }

        // Validar stock de productos
        for (const item of products) {
            const product = await Product.findById(item.producto);
            if (!product) {
                return res.status(404).json({ success: false, message: `Producto con ID ${item.producto} no encontrado` });
            }
            if (product.stock < item.cantidad) {
                return res.status(400).json({ success: false, message: `Stock insuficiente para el producto ${product.name}` });
            }
            item.producto = product; // Asegúrate de que el producto esté poblado
        }

        // Actualizar productos en la factura
        order.products = products;
        order.total = products.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
        await order.save();

        res.status(200).json({ success: true, message: 'Factura actualizada', order });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error al editar la factura', error: err.message });
    }
};

export const obtenerFacturasUsuario = async (req, res) => {
    try {
        const userId = req.usuario._id;
        const orders = await Order.find({ user: userId }).populate('products.producto');

        if (!orders || orders.length === 0) {
            return res.status(404).json({ success: false, message: 'No se encontraron facturas para este usuario' });
        }

        res.status(200).json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error al obtener las facturas del usuario', error: err.message });
    }
};

export const obtenerProductosFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('products.producto');

        if (!order) {
            return res.status(404).json({ success: false, message: 'Factura no encontrada' });
        }

        res.status(200).json({ success: true, products: order.products });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error al obtener los productos de la factura', error: err.message });
    }
};