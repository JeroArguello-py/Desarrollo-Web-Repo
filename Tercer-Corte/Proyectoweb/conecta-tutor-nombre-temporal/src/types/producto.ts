export const cateogorias = ['aura', 'farming']

export type categoria = typeof cateogorias[number]

export const Unidades_minimas = 5;

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: categoria;
  unidades: number;
}

export type ProductoDatos = Omit<Producto, 'id'>;