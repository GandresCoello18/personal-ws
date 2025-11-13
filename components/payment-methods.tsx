import type React from "react"

interface PaymentMethod {
  name: string
  icon: React.ReactNode
  description: string
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Bancos de Ecuador",
    icon: "🇪🇨",
    description: "Transferencia bancaria local",
  },
  {
    name: "Bancos de Chile",
    icon: "🇨🇱",
    description: "Transferencia bancaria local",
  },
  {
    name: "PayPal",
    icon: "🅿️",
    description: "Pagos internacionales",
  },
  {
    name: "Airtm",
    icon: "💳",
    description: "Plataforma de pagos digital",
  },
  {
    name: "Banco de Estados Unidos",
    icon: "🇺🇸",
    description: "Transferencia bancaria internacional",
  },
  {
    name: "Banco de Europa",
    icon: "🇪🇺",
    description: "Transferencia bancaria internacional",
  },
  {
    name: "Deel",
    icon: "🌐",
    description: "Plataforma de pagos global",
  },
]

export function PaymentMethods() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="section-title">Métodos de Pago</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Acepto múltiples opciones de pago para tu comodidad. Elige la que mejor se adapte a ti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="card-elevated p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4 flex justify-center">{method.icon}</div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{method.name}</h3>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-muted/50 rounded-lg border border-border text-center">
          <p className="text-muted-foreground">
            Contacta conmigo para coordinar los detalles de pago según el método que prefieras.{" "}
            <span className="font-semibold text-accent">Sin comisiones ocultas.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
