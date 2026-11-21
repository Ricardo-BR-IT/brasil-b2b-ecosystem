<?php
/**
 * Plugin Name: Omie & Conta Azul Régua de Cobrança PIX/Boleto via WhatsApp
 * Description: Sincroniza contas a receber vencendo/vencidas no ERP e envia 2ª via de Boleto e PIX automaticamente no WhatsApp do cliente.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: omie-contaazul-cobranca-whatsapp-asaas
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
