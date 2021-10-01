import { Funcionario } from 'src/app/models/funcionario';
export interface Marcacao
{
    id?: number,
    funcionarioId: Number
    dataMarcacao: string;
    funcionario: Funcionario;
    horaEntrada: string;
    horaSaidaAlmoco: string;
    horaVoltaAlmoco: string;
    saida: string;
    horasT?: string;
}