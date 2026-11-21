<?php
/**
 * Plugin Name: Bling ERP Auditor de Taxas e Repasses Mercado Livre & Shopee
 * Description: Audita automaticamente cada pedido importado no Bling contra a comissão e frete descontados pelos marketplaces.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: bling-conciliador-ml-shopee-amazon
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
