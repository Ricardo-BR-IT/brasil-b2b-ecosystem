<?php
/**
 * Plugin Name: Motor de Cashback Instantâneo & Carteira de Fidelidade para Varejo BR
 * Description: Concede crédito automático de 5% a 15% para a próxima compra com alerta de expiração via WhatsApp em 30 dias.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: vtex-nuvemshop-cashback-pix-fidelidade
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
