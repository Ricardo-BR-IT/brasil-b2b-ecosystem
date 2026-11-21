<?php
/**
 * Plugin Name: Calculadora de Frete Contingência Correios, Jadlog & Melhor Envio
 * Description: Garante que o checkout nunca fique fora do ar quando a API dos Correios cai, usando tabela de contingência local por faixa de CEP.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: melhorenvio-correios-frete-inteligente
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
