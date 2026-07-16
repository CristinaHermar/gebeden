/* ============================================================
   PRECES — datos de oraciones (EN / NL / LA)
   Fuentes: textos tradicionales católicos (dominio público) y,
   para las dos últimas oraciones del Opus Dei, opusdei.org
   (traducción propia al neerlandés y al latín).
   ============================================================ */

const PRAYERS = [
  {
    id: "signum-crucis",
    category: "daily",
    title: { en: "Sign of the Cross", nl: "Kruisteken", la: "Signum Crucis" },
    text: {
      en: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      nl: "In de naam van de Vader, en de Zoon, en de Heilige Geest. Amen.",
      la: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen."
    }
  },
  {
    id: "credo",
    category: "daily",
    title: { en: "Apostles' Creed", nl: "Apostolische Geloofsbelijdenis", la: "Symbolum Apostolorum" },
    text: {
      en: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
      nl: "Ik geloof in God, de almachtige Vader, Schepper van hemel en aarde. En in Jezus Christus, zijn enige Zoon, onze Heer, die ontvangen is van de Heilige Geest, geboren uit de maagd Maria; die geleden heeft onder Pontius Pilatus, is gekruisigd, gestorven en begraven; die nedergedaald is ter helle, de derde dag verrezen uit de doden; die opgevaren is ten hemel en zit aan de rechterhand van God, zijn almachtige Vader; vandaar zal Hij komen oordelen de levenden en de doden. Ik geloof in de Heilige Geest, de heilige katholieke Kerk, de gemeenschap van de heiligen, de vergiffenis van de zonden, de verrijzenis van het lichaam, en het eeuwig leven. Amen.",
      la: "Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum: qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen."
    }
  },
  {
    id: "pater-noster",
    category: "daily",
    title: { en: "Our Father", nl: "Onze Vader", la: "Pater Noster" },
    text: {
      en: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      nl: "Onze Vader, die in de hemel zijt, uw Naam worde geheiligd, uw Rijk kome, uw wil geschiede op aarde zoals in de hemel. Geef ons heden ons dagelijks brood, en vergeef ons onze schuld, zoals ook wij aan anderen hun schuld vergeven. En leid ons niet in bekoring, maar verlos ons van het kwade. Amen.",
      la: "Pater noster, qui es in cælis: sanctificétur nomen tuum; advéniat regnum tuum; fiat volúntas tua, sicut in cælo, et in terra. Panem nostrum cotidiánum da nobis hódie; et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris; et ne nos indúcas in tentatiónem; sed líbera nos a malo. Amen."
    }
  },
  {
    id: "ave-maria",
    category: "daily",
    title: { en: "Hail Mary", nl: "Wees Gegroet", la: "Ave Maria" },
    text: {
      en: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      nl: "Wees gegroet, Maria, vol van genade, de Heer is met u. Gij zijt de gezegende onder de vrouwen en gezegend is Jezus, de vrucht van uw schoot. Heilige Maria, Moeder van God, bid voor ons, zondaars, nu en in het uur van onze dood. Amen.",
      la: "Ave María, grátia plena, Dóminus tecum. Benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen."
    }
  },
  {
    id: "gloria-patri",
    category: "daily",
    title: { en: "Glory Be", nl: "Eer aan de Vader", la: "Gloria Patri" },
    text: {
      en: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      nl: "Eer aan de Vader, en de Zoon, en de Heilige Geest. Zoals het was in het begin, en nu, en altijd, tot in de eeuwen der eeuwen. Amen.",
      la: "Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen."
    }
  },
  {
    id: "fatima",
    category: "daily",
    title: { en: "O My Jesus (Fatima Prayer)", nl: "O mijn Jezus (Fátima-gebed)", la: "Oratio Fatimae" },
    text: {
      en: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of thy mercy. Amen.",
      nl: "O mijn Jezus, vergeef ons onze zonden, red ons voor het vuur van de hel, breng alle zielen naar de Hemel, vooral diegenen die uw barmhartigheid het meeste nodig hebben. Amen.",
      la: "Dómine Iesu, dimítte nobis débita nostra, líbera nos ab igne inférni, perduc in cælum omnes ánimas, præsértim illas quæ misericórdiæ tuæ máxime índigent. Amen."
    }
  },
  {
    id: "salve-regina",
    category: "daily",
    title: { en: "Hail, Holy Queen", nl: "Wees Gegroet, Koningin", la: "Salve Regina" },
    text: {
      en: "Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.",
      nl: "Wees gegroet, Koningin, Moeder van barmhartigheid; ons leven, onze vreugde en onze hoop, wees gegroet. Tot u roepen wij, ballingen, kinderen van Eva; tot u smeken wij, zuchtend en wenend in dit dal van tranen. Daarom dan, onze voorspreekster, sla op ons uw barmhartige ogen; en toon ons, na deze ballingschap, Jezus, de gezegende vrucht van uw schoot. O goedertieren, o liefdevolle, o zoete Maagd Maria.",
      la: "Salve, Regína, Mater misericórdiæ, vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Evæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, O pia, O dulcis Virgo María."
    }
  },
  {
    id: "veni-sancte-spiritus",
    category: "daily",
    title: { en: "Come, Holy Spirit", nl: "Kom, Heilige Geest", la: "Veni, Sancte Spíritus" },
    text: {
      en: "Come, Holy Spirit, fill the hearts of your faithful, and kindle in them the fire of your love. Send forth your Spirit, and they shall be created. And you shall renew the face of the earth.",
      nl: "Kom, Heilige Geest, vervul de harten van uw gelovigen en ontsteek in hen het vuur van uw liefde. Zend uw Geest uit, en alles zal herschapen worden. En Gij zult het aanschijn van de aarde vernieuwen.",
      la: "Veni, Sancte Spíritus, reple tuórum corda fidélium, et tui amóris in eis ignem accénde. Emítte Spíritum tuum, et creabúntur. Et renovábis fáciem terræ."
    },
    note: {
      en: "Let us pray. O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Spirit we may be truly wise and ever enjoy his consolation. Through Christ our Lord. Amen.",
      nl: "Laat ons bidden. God, Gij hebt de harten van de gelovigen door de verlichting van de Heilige Geest onderwezen: geef dat wij door die Heilige Geest de ware wijsheid mogen bezitten, en ons altijd over zijn vertroosting mogen verblijden. Door Christus onze Heer. Amen.",
      la: "Orémus. Deus, qui corda fidélium Sancti Spíritus illustratióne docuísti, da nobis in eódem Spíritu recta sápere, et de eius semper consolatióne gaudére. Per Christum Dóminum nostrum. Amen."
    }
  },
  {
    id: "opusdei-begin",
    category: "opusdei",
    title: { en: "To Begin Prayer", nl: "Om het Gebed te Beginnen", la: "Ad Oratiónem Incipiéndam" },
    text: {
      en: "My Lord and my God, I firmly believe that you are here, that you see me, that you hear me. I adore you with profound reverence. I ask your pardon for my sins, and grace to make this time of prayer fruitful. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Mijn Heer en mijn God, ik geloof vast dat U hier aanwezig bent, dat U mij ziet, dat U mij hoort. Ik aanbid U met diepe eerbied. Ik vraag vergeving voor mijn zonden en de genade om dit gebedsmoment vruchtbaar te maken. Mijn Onbevlekte Moeder, heilige Jozef, mijn vader en heer, mijn engelbewaarder: kom voor mij tussenbeide.",
      la: "Dómine et Deus meus, firmíter credo te hic adésse, me vidére, me audíre. Te profúnda reveréntia adóro. Véniam peto pro peccátis meis, et grátiam ut hoc tempus oratiónis fructuósum sit. Mater mea Immaculáta, sancte Ioseph pater et dómine mi, Ángele Custos: intercédite pro me."
    },
    source: {
      en: "Prayer taught by St. Josemaría Escrivá — opusdei.org",
      nl: "Gebed onderwezen door de heilige Jozefmaria Escrivá — opusdei.org (eigen vertaling)",
      la: "Oratio a S. Iosephmaria Escrivá tradita — opusdei.org (translatio propria)"
    }
  },
  {
    id: "opusdei-end",
    category: "opusdei",
    title: { en: "To End Prayer", nl: "Om het Gebed te Besluiten", la: "Ad Oratiónem Claudéndam" },
    text: {
      en: "I thank you, my God, for the good resolutions, affections, and inspirations you have communicated to me in this meditation. I ask your help to put them into effect. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Ik dank U, mijn God, voor de goede voornemens, gevoelens en ingevingen die U mij tijdens deze overweging hebt geschonken. Ik vraag uw hulp om ze in praktijk te brengen. Mijn Onbevlekte Moeder, heilige Jozef, mijn vader en heer, mijn engelbewaarder: kom voor mij tussenbeide.",
      la: "Grátias tibi ago, Deus meus, pro bonis propósitis, afféctibus et inspiratiónibus quas mihi in hac meditatióne communicásti. Auxílium tuum peto ut ea ad efféctum perdúcam. Mater mea Immaculáta, sancte Ioseph pater et dómine mi, Ángele Custos: intercédite pro me."
    },
    source: {
      en: "Prayer taught by St. Josemaría Escrivá — opusdei.org",
      nl: "Gebed onderwezen door de heilige Jozefmaria Escrivá — opusdei.org (eigen vertaling)",
      la: "Oratio a S. Iosephmaria Escrivá tradita — opusdei.org (translatio propria)"
    }
  }
];

/* ============================================================
   ROSARY / ROZENKRANS / ROSARIUM
   ============================================================ */

const ROSARY_STEPS = [
  { ref: "signum-crucis", label: { en: "On the Crucifix", nl: "Op het kruisje", la: "Ad crucifixum" } },
  { ref: "credo", label: { en: "On the Crucifix", nl: "Op het kruisje", la: "Ad crucifixum" } },
  { ref: "pater-noster", label: { en: "First large bead", nl: "Eerste grote kraal", la: "Prima grana maior" } },
  { ref: "ave-maria", label: { en: "Three small beads — for Faith, Hope and Charity", nl: "Drie kleine kralen — voor Geloof, Hoop en Liefde", la: "Tres granulae — pro Fide, Spe et Caritate" }, repeat: 3 },
  { ref: "gloria-patri", label: { en: "Before each decade / mystery", nl: "Voor elk tientje / geheim", la: "Ante quodque decadem" } }
];

const DECADE_PATTERN = [
  { ref: "pater-noster", label: { en: "1 Our Father", nl: "1 Onze Vader", la: "1 Pater Noster" } },
  { ref: "ave-maria", label: { en: "10 Hail Marys", nl: "10 Weesgegroetjes", la: "10 Ave Maria" } },
  { ref: "gloria-patri", label: { en: "1 Glory Be", nl: "1 Eer aan de Vader", la: "1 Gloria Patri" } },
  { ref: "fatima", label: { en: "Fatima Prayer", nl: "Fátima-gebed", la: "Oratio Fatimae" } }
];

const MYSTERIES = {
  joyful: {
    days: [1, 6], // Monday, Saturday
    name: { en: "Joyful Mysteries", nl: "Blijde Geheimen", la: "Mysteria Gaudiosa" },
    items: [
      { en: "The Annunciation", nl: "De aankondiging van de engel aan Maria", la: "Annuntiatio" },
      { en: "The Visitation", nl: "Het bezoek van Maria aan Elisabeth", la: "Visitatio" },
      { en: "The Nativity", nl: "De geboorte van Jezus", la: "Nativitas" },
      { en: "The Presentation in the Temple", nl: "De opdracht van Jezus in de tempel", la: "Praesentatio" },
      { en: "The Finding in the Temple", nl: "Het terugvinden van Jezus in de tempel", la: "Inventio in Templo" }
    ]
  },
  sorrowful: {
    days: [2, 5], // Tuesday, Friday
    name: { en: "Sorrowful Mysteries", nl: "Droevige Geheimen", la: "Mysteria Dolorosa" },
    items: [
      { en: "The Agony in the Garden", nl: "De doodsangst van Jezus in de Hof van Olijven", la: "Agonia in Horto" },
      { en: "The Scourging at the Pillar", nl: "De geseling", la: "Flagellatio" },
      { en: "The Crowning with Thorns", nl: "De doornenkroning", la: "Coronatio Spinis" },
      { en: "The Carrying of the Cross", nl: "De kruisdraging", la: "Baiulatio Crucis" },
      { en: "The Crucifixion and Death", nl: "De kruisiging en dood van Jezus", la: "Crucifixio" }
    ]
  },
  glorious: {
    days: [0, 3], // Sunday, Wednesday
    name: { en: "Glorious Mysteries", nl: "Glorievolle Geheimen", la: "Mysteria Gloriosa" },
    items: [
      { en: "The Resurrection", nl: "De verrijzenis van Jezus", la: "Resurrectio" },
      { en: "The Ascension", nl: "De hemelvaart van Jezus", la: "Ascensio" },
      { en: "The Descent of the Holy Spirit", nl: "De nederdaling van de Heilige Geest", la: "Descensus Spiritus Sancti" },
      { en: "The Assumption of Mary", nl: "De tenhemelopneming van Maria", la: "Assumptio Mariae" },
      { en: "The Coronation of Mary", nl: "De kroning van Maria in de hemel", la: "Coronatio Mariae" }
    ]
  },
  luminous: {
    days: [4], // Thursday
    name: { en: "Luminous Mysteries", nl: "Lichtende Geheimen", la: "Mysteria Luminosa" },
    items: [
      { en: "The Baptism in the Jordan", nl: "De doop van Jezus in de Jordaan", la: "Baptismus in Iordane" },
      { en: "The Wedding at Cana", nl: "De bruiloft van Kana", la: "Nuptiae in Cana" },
      { en: "The Proclamation of the Kingdom", nl: "De verkondiging van het Rijk Gods", la: "Proclamatio Regni" },
      { en: "The Transfiguration", nl: "De gedaanteverandering op de berg Tabor", la: "Transfiguratio" },
      { en: "The Institution of the Eucharist", nl: "De instelling van de Eucharistie", la: "Institutio Eucharistiae" }
    ]
  }
};

const CLOSING_REF = "salve-regina";
