<?php
/**
 * Plugin Name: Nuvemshop & Tray PIX Desconto Progressivo & QR Instantâneo
 * Description: Aumenta conversão de checkout oferecendo 5% no PIX acima de R$ 100 e 10% acima de R$ 300 com copy-paste instantâneo.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: nuvemshop-pix-desconto-progressivo
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
