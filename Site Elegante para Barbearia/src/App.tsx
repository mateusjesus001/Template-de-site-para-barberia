import { FormEvent, ReactNode, useState } from 'react'

const heroImage =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=88'
const shopImage =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85'
const craftImage =
  'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?auto=format&fit=crop&w=1000&q=85'
const teamImage =
  'https://images.unsplash.com/photo-1672642150228-3fcd5826ec26?auto=format&fit=crop&w=1000&q=85'

type IconName =
  | 'arrow'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'instagram'
  | 'location'
  | 'menu'
  | 'phone'
  | 'scissors'
  | 'star'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4M16 2v4M3 10h18" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
    scissors: (
      <>
        <circle cx="6" cy="7" r="3" />
        <circle cx="6" cy="17" r="3" />
        <path d="m8.7 8.3 12.3 6.2M8.7 15.7 21 9.5" />
      </>
    ),
    star: <path d="m12 2 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1L12 2Z" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    number: '01',
    title: 'Corte clássico',
    description: 'Consultoria de estilo, corte na tesoura ou máquina e finalização premium.',
    price: 'R$ 65',
  },
  {
    number: '02',
    title: 'Barba & ritual',
    description: 'Toalha quente, desenho preciso, navalha e hidratação com óleos especiais.',
    price: 'R$ 55',
  },
  {
    number: '03',
    title: 'Experiência completa',
    description: 'Corte, barba, sobrancelha e uma pausa para você sair na sua melhor versão.',
    price: 'R$ 110',
  },
]

const testimonials = [
  {
    text: 'Ambiente impecável, atendimento no horário e um cuidado que vai muito além do corte. Virou meu ritual quinzenal.',
    name: 'Cliente da barbearia',
    detail: 'Avaliação verificada',
  },
  {
    text: 'Entenderam exatamente o estilo que eu procurava. Serviço preciso, conversa boa e café excelente.',
    name: 'Cliente da barbearia',
    detail: 'Cliente verificado',
  },
]

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Template Barbearia — início">
      <span className="logo-mark">
        <Icon name="scissors" size={31} />
      </span>
      <span>
        <strong>TEMPLATE BARBEARIA</strong>
        <small>SEU ESTILO, SUA MARCA</small>
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>A barbearia</a>
            <a href="#equipe" onClick={closeMenu}>Equipe</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </nav>
          <a className="button button-small header-cta" href="#agendar">
            Agendar horário <Icon name="arrow" size={17} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={25} />
          </button>
        </div>
        <div className="header-barber-pole" aria-hidden="true">
          <span />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img className="hero-background" src={heroImage} alt="Barbeiro finalizando o corte de um cliente" />
          <div className="hero-overlay" />
          <div className="hero-texture" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> Um site à altura da sua barbearia</div>
            <h1>Sua barbearia.<br /><em>Sua marca, seu estilo.</em></h1>
            <p>
              Uma presença digital marcante para apresentar seu trabalho,
              conquistar novos clientes e transformar visitas em agendamentos.
            </p>
            <div className="hero-actions">
              <a className="button" href="#agendar">
                <Icon name="calendar" size={19} /> Agendar meu horário
              </a>
              <a className="text-link" href="#servicos">
                Conheça os serviços <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div className="hero-meta container">
            <div><Icon name="location" /><span>Rua das Palmeiras, 128<br /><small>Centro · São Paulo</small></span></div>
            <div><Icon name="clock" /><span>Ter — Sáb<br /><small>09h às 20h</small></span></div>
            <div className="hero-rating"><strong>4.9</strong><span><span className="stars">★★★★★</span><small>+380 avaliações</small></span></div>
          </div>
        </section>

        <section className="manifesto" id="sobre">
          <div className="container manifesto-grid">
            <div className="section-heading">
              <div className="eyebrow"><span /> Uma experiência completa</div>
              <h2>Onde tradição<br />encontra <em>atitude.</em></h2>
            </div>
            <div className="manifesto-copy">
              <p className="lead">Acreditamos que cuidar do visual é também cuidar da confiança.</p>
              <p>
                Cada detalhe deste template foi pensado para valorizar a identidade
                da sua barbearia — do primeiro impacto até o pedido de agendamento.
              </p>
              <a className="text-link dark-link" href="#equipe">Conheça nossa proposta <Icon name="arrow" size={18} /></a>
            </div>
            <div className="manifesto-images">
              <img className="shop-image" src={shopImage} alt="Interior sofisticado da barbearia com poltronas de couro" />
              <div className="experience-badge">
                <strong>100%</strong>
                <span>estilo<br />próprio</span>
              </div>
              <img className="craft-image" src={craftImage} alt="Barbeiro trabalhando com precisão no cabelo do cliente" />
            </div>
          </div>
        </section>

        <section className="services section-dark" id="servicos">
          <div className="container">
            <div className="services-header">
              <div className="section-heading light">
                <div className="eyebrow"><span /> Nossos serviços</div>
                <h2>Precisão em cada<br /><em>detalhe.</em></h2>
              </div>
              <p>Escolha sua experiência. Nós cuidamos do resto.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Icon name="scissors" size={27} /></div>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-price">
                    <small>A partir de</small>
                    <strong>{service.price}</strong>
                  </div>
                  <a className="circle-link" href="#agendar" aria-label={`Agendar ${service.title}`}>
                    <Icon name="arrow" size={20} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team" id="equipe">
          <div className="container team-grid">
            <div className="team-photo">
              <img src={teamImage} alt="Barbeiro especialista atendendo um cliente" />
              <div className="team-caption">
                <span>BARBEIRO ESPECIALISTA</span>
                <strong>Seu especialista</strong>
                <small>Clássico · Degradê · Barba</small>
              </div>
            </div>
            <div className="team-content">
              <div className="eyebrow"><span /> Mestres da casa</div>
              <h2>Técnica apurada.<br /><em>Atendimento de verdade.</em></h2>
              <p className="lead">Nossa equipe une experiência, repertório e paixão pelo ofício.</p>
              <p>
                Aqui, cada barbeiro escuta antes de criar. O resultado é um visual
                que respeita seu estilo, sua rotina e a sua personalidade.
              </p>
              <ul>
                <li><span><Icon name="check" size={16} /></span> Profissionais especializados</li>
                <li><span><Icon name="check" size={16} /></span> Produtos selecionados</li>
                <li><span><Icon name="check" size={16} /></span> Atendimento com hora marcada</li>
              </ul>
              <a className="button button-dark" href="#agendar">Escolher profissional <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="testimonial-top">
              <div>
                <div className="eyebrow"><span /> Quem vive, recomenda</div>
                <h2>Histórias de quem<br /><em>já é da casa.</em></h2>
              </div>
              <div className="review-summary"><strong>4.9</strong><span><span className="stars">★★★★★</span><small>Google Reviews</small></span></div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.text}>
                  <Icon name="star" size={25} />
                  <p>“{testimonial.text}”</p>
                  <footer><strong>{testimonial.name}</strong><small>{testimonial.detail}</small></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="agendar">
          <div className="booking-image" />
          <div className="container booking-inner">
            <div className="booking-copy">
              <div className="eyebrow"><span /> Sua cadeira está pronta</div>
              <h2>Reserve seu momento.<br /><em>Saia na sua melhor versão.</em></h2>
              <p>Escolha o serviço e deixe o resto com a gente.</p>
            </div>
            <form className="booking-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="success-message" role="status">
                  <span><Icon name="check" size={24} /></span>
                  <div>
                    <strong>Pedido recebido!</strong>
                    <p>Entraremos em contato para confirmar o melhor horário.</p>
                  </div>
                  <button type="button" onClick={() => setSubmitted(false)}>Agendar outro</button>
                </div>
              ) : (
                <>
                  <label>
                    <span>Seu nome</span>
                    <input required name="name" placeholder="Como podemos chamar você?" />
                  </label>
                  <label>
                    <span>Telefone</span>
                    <input required name="phone" type="tel" placeholder="(11) 99999-9999" />
                  </label>
                  <label>
                    <span>Serviço</span>
                    <select required name="service" defaultValue="">
                      <option value="" disabled>Selecione uma experiência</option>
                      {services.map((service) => <option key={service.number}>{service.title}</option>)}
                    </select>
                  </label>
                  <button className="button" type="submit">Solicitar agendamento <Icon name="arrow" size={18} /></button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="contato">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Estilo, tradição e uma experiência<br />feita no seu tempo.</p>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
          </div>
          <div>
            <h3>Visite a casa</h3>
            <p>Rua das Palmeiras, 128<br />Centro · São Paulo — SP</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">Ver no mapa <Icon name="arrow" size={15} /></a>
          </div>
          <div>
            <h3>Horários</h3>
            <p>Terça a sexta: 09h — 20h<br />Sábado: 09h — 18h<br />Domingo e segunda: fechado</p>
          </div>
          <div>
            <h3>Fale conosco</h3>
            <a href="tel:+5511999999999"><Icon name="phone" size={16} /> (11) 99999-9999</a>
            <a href="mailto:ola@dombarba.com.br">ola@dombarba.com.br</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© Template Barbearia. Personalize com a sua marca.</span>
          <span>Feito com cuidado, como todo bom corte.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
