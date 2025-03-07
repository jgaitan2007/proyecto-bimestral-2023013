import Cart from '../carrito/cart.model.js';
import Order from '../gestionFacturas/facturas.model.js';
import { generateInvoice } from '../helpers/generarFacturas.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const completarCompra = async (req, res) => {
    try {
        const userId = req.usuario._id;
        const cart = await Cart.findOne({ user: userId }).populate('items.producto');

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ success: false, message: 'El carrito está vacío' });
        }

        const orderData = {
            user: userId,
            products: cart.items,
            total: cart.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0),
            createdAt: new Date()
        };

        const order = await Order.create(orderData);

        const invoiceDir = path.join(__dirname, '../../publics/uploads/savePDF');
        if (!fs.existsSync(invoiceDir)) {
            fs.mkdirSync(invoiceDir, { recursive: true });
        }

        const invoicePath = path.join(invoiceDir, `invoice-${order._id}.pdf`);
        generateInvoice(order, invoicePath);

        // Clear the cart
        cart.items = [];
        await cart.save();

        res.status(200).json({ success: true, message: 'Compra completada', order, invoicePath });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error al completar la compra', error: err.message });
    }
};

export const obtenerHistorialCompras = async (req, res) => {
    try {
        const userId = req.usuario._id;
        const orders = await Order.find({ user: userId }).populate('products.producto');

        if (!orders || orders.length === 0) {
            return res.status(404).json({ success: false, message: 'No se encontraron compras anteriores' });
        }

        res.status(200).json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error al obtener el historial de compras', error: err.message });
    }
};