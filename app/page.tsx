const navItems = ["الرئيسية", "الخدمات", "لماذا نحن", "الأسعار", "الأسئلة الشائعة"];

const stats = [
  { value: "120+", label: "مشروع منجز" },
  { value: "94%", label: "رضا العملاء" },
  { value: "24/7", label: "دعم مستمر" },
  { value: "3x", label: "سرعة التنفيذ" },
];

const services = [
  {
    icon: "⚡",
    title: "تحسين تجربة المستخدم",
    text: "نصمم تجارب رقمية سلسة تُسهم في تحويل الزوار إلى عملاء مخلصين.",
  },
  {
    icon: "📈",
    title: "استراتيجيات نمو",
    text: "نعمل على بناء خطط نمو قابلة للتنفيذ وتؤدي إلى زيادة الإيرادات والتحويلات.",
  },
  {
    icon: "🧩",
    title: "حلول تقنية مخصصة",
    text: "نبني أنظمة متكاملة تناسب احتياجاتك التشغيلية وتطوير أعمالك بمرونة. ",
  },
];

const features = [
  "تصميم بصري احترافي يلائم هوية علامتك",
  "منهجية تنفيذ سريعة ومرنة",
  "تجربة مستخدم متقدمة وموجهة للتحويل",
  "دعم فني ودعم مستمر بعد الإطلاق",
];

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "مناسب للعلامات الناشئة وتحديد وجودها الرقمي.",
    highlight: false,
    list: ["صفحة هبوط متقدمة", "تصميم متجاوب", "تهيئة سريعة", "استشارة أولية"],
  },
  {
    name: "Growth",
    price: "799",
    description: "الحل المثالي للشركات التي تريد توسعًا مستدامًا.",
    highlight: true,
    list: ["واجهة متكاملة", "تحليل تجربة المستخدم", "إعداد محتوى", "دعم فني شهري"],
  },
  {
    name: "Scale",
    price: "1499",
    description: "حل شامل للمؤسسات والبرامج التي تحتاج إلى أتمتة وقوة أكبر.",
    highlight: false,
    list: ["تحليل متقدم", "تصميم مخصص", "دعم أولوية", "استراتيجية نمو كاملة"],
  },
];

const faqs = [
  {
    question: "هل تقدمون خدمات للشركات الصغيرة فقط؟",
    answer: "لا، نحن نعمل مع الشركات الصغيرة، الناشئة، والمؤسسات الكبيرة، وفق احتياجات كل مشروع.",
  },
  {
    question: "كم تستغرق مدة التنفيذ؟",
    answer: "تعتمد على حجم المشروع، لكن معظم المشاريع تبدأ في 2 إلى 4 أسابيع حسب التعقيد.",
  },
  {
    question: "هل يمكن تعديل التصميم لاحقًا؟",
    answer: "نعم، نحن نوفر دعمًا مستمرًا وتحديثات وفق نمو العمل وتغير احتياجاته.",
  },
  {
    question: "هل تتوفر خدمات الدعم بعد الإطلاق؟",
    answer: "بالتأكيد، نقدم دعمًا مستمرًا، تحسينات مستمرة، وصيانة دورية وفق خطة واضحة.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand">
            <span className="brand-mark">T</span>
            <span>Tova</span>
          </div>

          <nav className="nav" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <a key={item} href={`#${item === "الرئيسية" ? "home" : item === "الخدمات" ? "services" : item === "لماذا نحن" ? "why" : item === "الأسعار" ? "pricing" : "faq"}`}>
                {item}
              </a>
            ))}
          </nav>

          <button className="primary-btn">احجز استشارة</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">حلول رقمية ذكية</span>
            <h1>نصنع تجارب رقمية تُحوّل الفكرة إلى نمو حقيقي.</h1>
            <p>
              نساعد الشركات والأعمال على بناء حضور رقمي قوي، وتحسين تجربة العملاء،
              وتوسيع نطاق تأثيرها عبر تصميمات، استراتيجيات وتكنولوجيا مُصممة خصيصًا.
            </p>
            <div className="cta-row">
              <button className="primary-btn">ابدأ الآن</button>
              <button className="secondary-btn">تصفح خدماتنا</button>
            </div>
            <div className="mini-trust">
              <div>
                <strong>+10k</strong>
                <span>مستخدم يومي</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>تقييم العملاء</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="glass-card main-card">
              <div className="badge">Performance</div>
              <h3>تجربة عمل أكثر سرعة ووضوحًا</h3>
              <div className="chart-bars" aria-hidden="true">
                <span style={{ height: "40%" }} />
                <span style={{ height: "58%" }} />
                <span style={{ height: "72%" }} />
                <span style={{ height: "90%" }} />
                <span style={{ height: "100%" }} />
              </div>
            </div>

            <div className="floating-card card-one">
              <span>ROI</span>
              <strong>+240%</strong>
            </div>

            <div className="floating-card card-two">
              <span>تسليم</span>
              <strong>أسبوع 2</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-box">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">خدماتنا</span>
            <h2>حلول مصممة لتطوير علامتك وتوسيع حضورك الرقمي.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-band" id="why">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="eyebrow">لماذا Tova؟</span>
            <h2>نحو نموذج أعمال أقوى، أسرع، وأكثر قابلية للتوسع.</h2>
            <p>
              ندمج الاستراتيجية والتصميم والتقنية في عملية واحدة، لنمنحك حلولًا فعالة
              لا تكتفي بجمال الواجهة فقط، بل تساهم في نمو أعمالك بشكل ذكي ومستدام.
            </p>

            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="feature-visual">
            <div className="visual-card">
              <div className="mini-panel">
                <span>سجل أداء</span>
                <strong>+85%</strong>
              </div>
              <div className="line-graph" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="legend-row">
                <span className="dot dot-one" /> السرعة
                <span className="dot dot-two" /> النمو
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">الأسعار</span>
            <h2>اختَر الخطة المناسبة لنموك.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`price-card ${plan.highlight ? "popular" : ""}`}>
                <div className="plan-head">
                  <h3>{plan.name}</h3>
                  {plan.highlight && <span className="recommended">الأكثر طلبًا</span>}
                </div>
                <div className="price-line">
                  <strong>{plan.price}</strong>
                  <span>ريال/شهر</span>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className={plan.highlight ? "primary-btn" : "secondary-btn"}>اختر الخطة</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="section-heading left-align">
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2>كل ما تحتاج إلى معرفته قبل البدء.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">جاهز للخطوة التالية؟</span>
            <h2>لنحوّل فكرتك إلى منتج رقمي يحقق نتائج فعلية.</h2>
          </div>
          <button className="primary-btn">تحدث معنا الآن</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div className="brand">
            <span className="brand-mark">T</span>
            <span>Tova</span>
          </div>
          <p>© 2026 Tova. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}
