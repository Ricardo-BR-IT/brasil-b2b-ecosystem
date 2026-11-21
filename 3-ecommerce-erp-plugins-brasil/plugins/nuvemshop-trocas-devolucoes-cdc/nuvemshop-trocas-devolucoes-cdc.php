<?php
/**
 * Plugin Name: Portal de Trocas, Devoluções (7 Dias CDC) e Logística Reversa BR
 * Description: Automatiza solicitações de troca dentro do prazo de 7 dias do Código de Defesa do Consumidor gerando vale-compras para reter a receita.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: nuvemshop-trocas-devolucoes-cdc
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
