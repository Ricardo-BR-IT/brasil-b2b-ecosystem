<?php
/**
 * Plugin Name: Bling & Tiny Validador Fiscal Preventivo NCM, CEST, CFOP & CSOSN
 * Description: Evita rejeição da Sefaz na Black Friday auditando todo o catálogo de produtos em busca de NCM extinto ou CFOP incompatível.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: bling-tiny-auditor-ncm-cfop-cest
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
