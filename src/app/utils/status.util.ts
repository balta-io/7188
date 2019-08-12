export class StatusUtil {
    public static convert(status: string): string {
        switch (status) {
            case 'confirmed': return 'Confirmada';
            case 'waiting_payment': return 'Aguardando Pagamento';
            case 'canceled': return 'Cancelada';
            case 'in_transit': return 'Em Trânsito';
            case 'completed': return 'Finalizada';
            default: return 'Confirmada'
        }
    }
}