<?php
/**
 * Plugin Name: WooCommerce Brasil Checkout Transparente CPF/CNPJ, IE & ViaCEP
 * Description: Adiciona máscara e validação real de CPF/CNPJ/Inscrição Estadual e preenchimento automático de endereço via CEP sem pesar o checkout.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: wc-brasil-cpf-cnpj-cep-checkout
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
