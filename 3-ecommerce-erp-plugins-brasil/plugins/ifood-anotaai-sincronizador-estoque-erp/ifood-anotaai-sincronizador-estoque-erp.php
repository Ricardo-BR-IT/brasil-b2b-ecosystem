<?php
/**
 * Plugin Name: Sincronizador de Estoque e CMV: iFood / Delivery ↔ Bling & Tiny
 * Description: Dá baixa automática de insumos no ERP a cada pedido concluído no delivery e pausa o item no cardápio se o estoque zerar.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: ifood-anotaai-sincronizador-estoque-erp
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
