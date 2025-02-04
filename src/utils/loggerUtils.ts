
export const logStart = (action: string) =>
    console.log(`*** INICIO CONSUMO ${action} ***`);
  
  export const logRequest = <T>(action: string, data: T) =>
    console.log(`✔️ Request service ${action}`, data);
  
  export const logResponse = <T>(action: string, response: T) =>
    console.log(`🔥 Response service ${action}`, response);
  
  export const logEnd = (action: string) =>
    console.log(`*** FIN CONSUMO ${action} ***`);
  
  export const logError = <T> (action: string, error: T) =>
    console.error(`❌ Error en ${action}:`, error);