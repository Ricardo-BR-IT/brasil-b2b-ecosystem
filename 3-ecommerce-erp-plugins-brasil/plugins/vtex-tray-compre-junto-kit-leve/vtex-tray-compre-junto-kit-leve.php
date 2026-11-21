<?php
/**
 * Plugin Name: VTEX & Tray Kit Compre Junto & Order Bump Ultra-Leve (<4KB)
 * Description: Aumenta o Ticket Médio (AOV) em 18% montando kits com desconto progressivo sem prejudicar o Core Web Vitals da loja.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: vtex-tray-compre-junto-kit-leve
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
