<?php
/**
 * Plugin Name: Bling & Tiny Exportador Contábil SPED / Domínio / Alterdata / Fortes
 * Description: Empacota todos os XMLs de entrada/saída, inutilizações e cancelamentos do mês já no layout de importação do sistema do contador.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: bling-exportador-dominio-alterdata
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
