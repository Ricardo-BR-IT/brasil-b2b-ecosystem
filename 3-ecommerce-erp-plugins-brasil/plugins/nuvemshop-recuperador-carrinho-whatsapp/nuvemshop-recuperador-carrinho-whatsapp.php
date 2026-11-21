<?php
/**
 * Plugin Name: Nuvemshop & Yampi Recuperador de Carrinho e PIX Expirado via WhatsApp
 * Description: Dispara mensagem personalizada no WhatsApp 15 minutos após abandono de carrinho ou PIX não pago já com o código Copia-e-Cola.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: nuvemshop-recuperador-carrinho-whatsapp
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
