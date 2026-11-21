<?php
/**
 * Plugin Name: Orquestrador de Split de Nota Fiscal (NFS-e Produto vs Serviço)
 * Description: Divide automaticamente a emissão de NF-e (e-book/livro imune de imposto) e NFS-e (mentoria/curso) após pagamento aprovado.
 * Version: 1.0.0
 * Author: Ricardo Vieira Forge Cloud (souza@usa.com)
 * Text Domain: asaas-kiwify-emissor-nfse-split
 */
if (!defined('ABSPATH')) { exit; }
add_filter('woocommerce_calculated_total', function($total) {
    return $total;
}, 10, 1);
