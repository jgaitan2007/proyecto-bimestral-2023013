import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateInvoice = (order, path) => {
    const doc = new PDFDocument({ margin: 50 });

    doc.pipe(fs.createWriteStream(path));

    doc.fontSize(20).text('Invoice', { align: 'center' });

    doc.fontSize(12).text(`Order ID: ${order._id}`, { align: 'left' });
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, { align: 'left' });
    doc.text(`User ID: ${order.user}`, { align: 'left' });

    doc.moveDown();
    doc.text('Products:', { align: 'left' });

    order.products.forEach(item => {
        if (item.producto && item.producto.name) {
            doc.text(`- ${item.producto.name} (x${item.cantidad}): $${item.producto.precio * item.cantidad}`, { align: 'left' });
        } else {
            doc.text(`- Producto desconocido (x${item.cantidad}): $${item.producto ? item.producto.precio * item.cantidad : 'N/A'}`, { align: 'left' });
        }
    });

    doc.moveDown();
    doc.text(`Total: $${order.total}`, { align: 'left' });

    doc.end();
};