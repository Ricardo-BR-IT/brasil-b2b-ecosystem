<?php
/**
 * Plugin Name: Tiny ERP & Olist Unificador de Etiqueta ZPL + DANFE Simplificada
 * Description: Imprime etiqueta de envio 100x150mm (ZPL/PDF) já com a DANFE Simplificada e lista de separação (Picking List) na mesma folha.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: tiny-etiqueta-termica-zpl-danfe
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
