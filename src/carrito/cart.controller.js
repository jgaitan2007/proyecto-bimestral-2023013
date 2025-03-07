import Cart from './cart.model.js';
import Product from '../gestionProductos/productos.model.js';

export const agregarCarrito = async (req, res) => {
    try {
        const { producto, cantidad } = req.body;
        const userId = req.usuario._id;

        const product = await Product.findById(producto);
        if (!product) {
            res.status(404).json({success: false, message: 'Producto no encontrado'});
        }

        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.producto.toString() === producto);
        if (itemIndex > -1) {
            cart.items[itemIndex].cantidad += cantidad;
        } else {
            cart.items.push({ producto, cantidad });
        }

        await cart.save();

        res.status(200).json({success: true, message: 'Producto agregado al carrito', cart});
    } catch (err) {
        res.status(500).json({success: false, message: 'Error al agregar producto al carrito', error: err.message});
    }
};