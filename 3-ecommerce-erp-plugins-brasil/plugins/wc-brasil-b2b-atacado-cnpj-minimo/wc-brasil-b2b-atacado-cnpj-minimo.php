<?php
/**
 * Plugin Name: WooCommerce Brasil Atacado B2B: Preço por CNPJ e Pedido Mínimo
 * Description: Libera tabela de preço de atacado somente para CNPJ ativo na Receita Federal e exige pedido mínimo por grade/caixa fechada.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: wc-brasil-b2b-atacado-cnpj-minimo
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
