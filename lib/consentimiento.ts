export const CRM_CONSENT_API = "https://app.baratio.es/api/consentimientos";

export type ConsentimientoEstado = "pendiente" | "firmado" | "caducado" | string;

export type ConsentimientoData = {
  nombre: string;
  apellidos: string;
  telefono_sms: string;
  estado: ConsentimientoEstado;
};

export type ConsentInitialState = "pendiente" | "firmado" | "invalido";

export function buildNombreCompleto(data: ConsentimientoData): string {
  return [data.nombre, data.apellidos].filter(Boolean).join(" ").trim();
}

export function resolveConsentInitialState(
  data: ConsentimientoData,
): ConsentInitialState {
  if (data.estado === "firmado") return "firmado";
  if (data.estado === "caducado") return "invalido";
  return "pendiente";
}
