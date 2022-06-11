import { Category } from '../types/Category'; 

export const categories: Category = {
    trip: { title: 'Viagem', color: 'green', expense: true },
    food: { title: 'Alimentacao', color: 'red', expense: true },
    gas: { title: 'Combustivel', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    payment: { title: 'Boleto', color: 'brown', expense: true },
    salary: { title: 'Pagamento', color: 'purple', expense: false }
}