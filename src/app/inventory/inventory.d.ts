export module Inventory {
  interface Tool {
    _id?: String,
    referencia: String,
    elemento: String,
    fabricante: String,
    disponibles?: Number,
    cantidad?: Number,
    laboratorio: String,
    facturas: Object[],
    imageId?: string,
    imageUrl?: string,
    createdAt?: Date,
    createdBy?: Object,
    prestadas?: Number
  }
  
  interface Material {
    _id?: String,
    nombre: String,
    unidad: String,
    cantidad: Number,
    laboratorio: String,
    sustract?: number,
    imageId?: string,
    imageUrl?: string,
    facturas?: Object[],
    createdAt: Date,
    createdBy: Object
  }
  
  interface LoanTool {
    _id?: String,
    referencia: String,
    elemento: String,
    laboratorio: String,
    disponibles?: Number,
    prestados?: number,
    imageId?: string,
    imageUrl?: string
  }
  
}
