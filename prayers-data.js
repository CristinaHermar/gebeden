/* ============================================================
   GEBEDEN — datos de oraciones (EN / NL / LA)
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

/* ============================================================
   PRECES (OPUS DEI LITANY) — LA / ES / EN / NL
   Texto latín y español: documento aportado por el usuario
   (© Prælatura Sanctæ Crucis et Operis Dei, uso personal).
   Traducciones al inglés y neerlandés: traducción propia a
   partir del latín y del español.
   ============================================================ */

const PRECES_LITANY = {
  title: { es: "Preces", en: "Preces", nl: "Preces", la: "Preces" },
  subtitle: {
    es: "Texto en latín y traducción",
    en: "Latin text and translation",
    nl: "Latijnse tekst en vertaling",
    la: "Textus Latinus et translatio"
  },
  source: {
    es: "Copyright del texto en latín © Prælatura Sanctæ Crucis et Operis Dei",
    en: "Copyright of the Latin text © Prælatura Sanctæ Crucis et Operis Dei",
    nl: "Copyright van de Latijnse tekst © Prælatura Sanctæ Crucis et Operis Dei",
    la: "Copyright textus Latini © Prælatura Sanctæ Crucis et Operis Dei"
  },
  items: [
    { kind: "label", la: "Sérviam!", es: "¡Te serviré!", en: "I will serve!", nl: "Ik zal dienen!" },

    { kind: "verse",
      v: { la: "Ad Trinitátem Beatíssimam.", es: "A la Santísima Trinidad.", en: "To the Most Holy Trinity.", nl: "Tot de Allerheiligste Drie-eenheid." },
      r: { la: "Grátias tibi, Deus, grátias tibi: vera et una Trínitas, una et summa Déitas, sancta et una Únitas.",
           es: "Gracias a ti, Señor Dios; gracias a ti, Trinidad única y verdadera, Dios único y supremo, Unidad única y santa.",
           en: "Thanks be to thee, O God, thanks be to thee: true and one Trinity, one and supreme Godhead, holy and one Unity.",
           nl: "Dank U, o God, dank U: ware en ene Drie-eenheid, ene en allerhoogste Godheid, heilige en ene Eenheid." } },

    { kind: "verse",
      v: { la: "Ad Iesum Christum Regem.", es: "A Jesucristo, Rey.", en: "To Jesus Christ the King.", nl: "Tot Jezus Christus, de Koning." },
      r: { la: "Dóminus Iudex noster; Dóminus Légifer noster; Dóminus Rex noster. Ipse salvábit nos.",
           es: "El Señor es nuestro juez. El Señor es nuestro legislador. El Señor es nuestro Rey. Él nos salvará.",
           en: "The Lord is our Judge; the Lord is our Lawgiver; the Lord is our King. He himself will save us.",
           nl: "De Heer is onze Rechter; de Heer is onze Wetgever; de Heer is onze Koning. Hij zal ons redden." } },

    { kind: "verse",
      v: { la: "Christe, Fili Dei vivi, miserére nobis.", es: "Cristo, Hijo de Dios vivo, ten misericordia de nosotros.", en: "Christ, Son of the living God, have mercy on us.", nl: "Christus, Zoon van de levende God, ontferm U over ons." },
      r: { la: "Christe, Fili Dei vivi, miserére nobis.", es: "Cristo, Hijo de Dios vivo, ten misericordia de nosotros.", en: "Christ, Son of the living God, have mercy on us.", nl: "Christus, Zoon van de levende God, ontferm U over ons." } },

    { kind: "verse",
      v: { la: "Exsúrge, Christe, ádiuva nos.", es: "Levántate, oh Cristo, ayúdanos.", en: "Arise, O Christ, help us.", nl: "Sta op, Christus, help ons." },
      r: { la: "Et líbera nos propter nomen tuum.", es: "Y líbranos a causa de tu nombre.", en: "And deliver us for thy name's sake.", nl: "En bevrijd ons omwille van uw naam." } },

    { kind: "verse",
      v: { la: "Dóminus illuminátio mea et salus mea: quem timébo?", es: "El Señor es mi luz y mi salvación, ¿a quién temeré?", en: "The Lord is my light and my salvation; whom shall I fear?", nl: "De Heer is mijn licht en mijn heil, voor wie zou ik vrezen?" },
      r: { la: "Si consístant advérsum me castra, non timébit cor meum; si exsúrgat advérsum me prœlium, in hoc ego sperábo.",
           es: "Si se levantan campamentos contra mí, mi corazón no temerá; si surge un combate en mi contra, en Él yo esperaré.",
           en: "If an army should encamp against me, my heart shall not fear; if war should rise up against me, in this will I be confident.",
           nl: "Al legert zich een leger tegen mij, mijn hart zal niet vrezen; al breekt er een strijd tegen mij los, toch blijf ik vol vertrouwen." } },

    { kind: "verse",
      v: { la: "Ad Beátam Vírginem Maríam Mediatrícem.", es: "A Santa María Virgen, mediadora.", en: "To the Blessed Virgin Mary, Mediatrix.", nl: "Tot de Heilige Maagd Maria, Middelares." },
      r: { la: "Recordáre, Virgo Mater Dei, dum stéteris in conspéctu Dómini, ut loquáris pro nobis bona.",
           es: "Acuérdate, oh Virgen Madre de Dios, mientras estás en la presencia del Señor, de hablar cosas buenas de nosotros.",
           en: "Remember, O Virgin Mother of God, when you stand in the presence of the Lord, to speak good things on our behalf.",
           nl: "Gedenk, Maagd en Moeder van God, wanneer u voor het aanschijn van de Heer staat, goede dingen voor ons te zeggen." } },

    { kind: "verse",
      v: { la: "Ad Sanctum Ioseph Sponsum Beátæ Maríæ Vírginis.", es: "A San José, esposo de Santa María Virgen.", en: "To Saint Joseph, Spouse of the Blessed Virgin Mary.", nl: "Tot de heilige Jozef, Bruidegom van de Heilige Maagd Maria." },
      r: { la: "Fecit te Deus quasi Patrem Regis, et dóminum univérsæ domus eius: ora pro nobis.",
           es: "Dios te estableció en el puesto de padre del Rey y en el de señor de toda su casa: ruega por nosotros.",
           en: "God made you as it were the father of the King, and lord of his whole household: pray for us.",
           nl: "God heeft u als het ware tot vader van de Koning gesteld, en tot heer van heel zijn huis: bid voor ons." } },

    { kind: "verse",
      v: { la: "Ad Ángelos Custódes.", es: "A los Ángeles Custodios.", en: "To the Guardian Angels.", nl: "Tot de bewaarengelen." },
      r: { la: "Sancti Ángeli Custódes nostri, deféndite nos in prœlio ut non pereámus in treméndo iudício.",
           es: "Oh, Santos Ángeles Custodios nuestros, defendednos en el combate, para que no perezcamos en el temible juicio.",
           en: "Holy Angels, our guardians, defend us in battle, that we may not perish in the dreadful judgment.",
           nl: "Heilige engelbewaarders, verdedig ons in de strijd, opdat wij niet verloren gaan in het vreselijk oordeel." } },

    { kind: "verse",
      v: { la: "Ad Sanctum Ioseph maríam Conditórem nostrum.", es: "A san Josemaría, nuestro Fundador.", en: "To Saint Josemaría, our Founder.", nl: "Tot de heilige Jozefmaria, onze Stichter." },
      r: { la: "Intercéde pro fíliis tuis ut, fidéles spirítui Óperis Dei, labórem sanctificémus et ánimas Christo lucrifácere quærámus.",
           es: "Intercede por tus hijos, para que, fieles al espíritu del Opus Dei, santifiquemos el trabajo y ganemos almas para Cristo.",
           en: "Intercede for your children, that, faithful to the spirit of Opus Dei, we may sanctify our work and seek to win souls for Christ.",
           nl: "Kom tussenbeide voor uw kinderen, opdat wij, trouw aan de geest van het Opus Dei, ons werk heiligen en zielen voor Christus trachten te winnen." } },

    { kind: "verse",
      v: { la: "Orémus pro Beatíssimo Papa nostro N.", es: "Oremos por el Santo Padre N.", en: "Let us pray for our most blessed Father, Pope N.", nl: "Laat ons bidden voor onze Heilige Vader, Paus N." },
      r: { la: "Dóminus consérvet eum, et vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in ánimam inimicórum eius.",
           es: "Que el Señor lo guarde y lo llene de vida y lo haga santo en la tierra y no lo entregue en manos de sus enemigos.",
           en: "May the Lord preserve him, and give him life, and make him blessed upon the earth, and not deliver him into the hands of his enemies.",
           nl: "Moge de Heer hem bewaren, hem leven geven, hem gelukkig maken op aarde, en hem niet overleveren aan de wil van zijn vijanden." } },

    { kind: "verse",
      v: { la: "Orémus et pro Antístite huius diœcésis.", es: "Oremos también por el Obispo de esta diócesis.", en: "Let us pray also for the Bishop of this diocese.", nl: "Laat ons ook bidden voor de bisschop van dit bisdom." },
      r: { la: "Stet et pascat in fortitúdine tua, Dómine, in sublimitáte nóminis tui.",
           es: "Que se mantenga firme y que ejerza su ministerio de pastor con tu fortaleza, en la sublimidad de tu nombre.",
           en: "May he stand firm and shepherd in thy strength, O Lord, in the majesty of thy name.",
           nl: "Moge hij standhouden en hoeden in uw kracht, Heer, in de verhevenheid van uw naam." } },

    { kind: "verse",
      v: { la: "Orémus pro unitáte apostolátus.", es: "Oremos por la unidad del apostolado.", en: "Let us pray for the unity of the apostolate.", nl: "Laat ons bidden voor de eenheid van het apostolaat." },
      r: { la: "Ut omnes unum sint, sicut tu Pater in me et ego in te: ut sint unum, sicut et nos unum sumus.",
           es: "Que todos sean uno, como tú, Padre, en mí y yo en Ti; que sean uno, como también nosotros somos uno.",
           en: "That all may be one, as thou, Father, art in me and I in thee: that they also may be one, as we are one.",
           nl: "Dat allen één mogen zijn, zoals Gij, Vader, in Mij zijt en Ik in U: dat zij één mogen zijn, zoals ook Wij één zijn." } },

    { kind: "verse",
      v: { la: "Omne regnum divísum contra se, desolábitur.", es: "Todo reino dividido contra sí mismo, será desolado.", en: "Every kingdom divided against itself shall be laid waste.", nl: "Ieder rijk dat tegen zichzelf verdeeld is, zal ten onder gaan." },
      r: { la: "Et omnis cívitas vel domus divísa contra se non stabit.",
           es: "Y toda ciudad o casa dividida contra sí no permanecerá en pie.",
           en: "And every city or house divided against itself shall not stand.",
           nl: "En elke stad of elk huis dat tegen zichzelf verdeeld is, zal niet standhouden." } },

    { kind: "verse",
      v: { la: "Orémus pro benefactóribus nostris.", es: "Oremos por nuestros benefactores.", en: "Let us pray for our benefactors.", nl: "Laat ons bidden voor onze weldoeners." },
      r: { la: "Retribúere dignáre, Dómine, ómnibus nobis bona faciéntibus propter nomen tuum, vitam ætérnam. Amen.",
           es: "Dígnate, Señor, a recompensar con la vida eterna a todos los que nos hacen el bien por tu nombre. Amén.",
           en: "Vouchsafe, O Lord, to reward with eternal life all who do us good for thy name's sake. Amen.",
           nl: "Waardig U, Heer, allen die ons goed doen omwille van uw naam, met het eeuwig leven te belonen. Amen." } },

    { kind: "verse",
      v: { la: "Orémus pro Patre.", es: "Oremos por el Padre.", en: "Let us pray for the Father.", nl: "Laat ons bidden voor de Vader." },
      r: { la: "Misericórdia Dómini ab ætérno et usque in ætérnum super eum: custódit enim Dóminus omnes diligéntes se.",
           es: "Que la misericordia del Señor repose sobre él desde siempre y para siempre, pues el Señor custodia a todos los que le aman.",
           en: "The mercy of the Lord is from eternity to eternity upon him: for the Lord keeps all those who love him.",
           nl: "De barmhartigheid van de Heer is van eeuwigheid tot eeuwigheid over hem: want de Heer behoedt allen die Hem liefhebben." } },

    { kind: "verse",
      v: { la: "Orémus et pro frátribus nostris Óperis Dei, vivis atque defúnctis.", es: "Oremos también por nuestros hermanos del Opus Dei, vivos y difuntos.", en: "Let us pray also for our brothers and sisters of Opus Dei, living and deceased.", nl: "Laat ons ook bidden voor onze broeders en zusters van het Opus Dei, levenden en overledenen." },
      r: { la: "Salvos fac servos tuos, Deus meus, sperántes in te.",
           es: "Salva a tus siervos, Dios mío, que esperan en ti.",
           en: "Save thy servants, O my God, who hope in thee.",
           nl: "Red uw dienaren, mijn God, die op U hopen." } },

    { kind: "verse",
      v: { la: "Mitte eis, Dómine, auxílium de sancto.", es: "Envíales, Señor, tu auxilio desde el cielo.", en: "Send them help, O Lord, from thy holy place.", nl: "Zend hun, Heer, hulp van uw heiligdom." },
      r: { la: "Et de Sion tuére eos.", es: "Y protégelos desde Sión.", en: "And defend them from Zion.", nl: "En bescherm hen vanuit Sion." } },

    { kind: "verse",
      v: { la: "Réquiem ætérnam dona eis, Dómine.", es: "Concédeles, Señor, el descanso eterno.", en: "Eternal rest grant unto them, O Lord.", nl: "Geef hun de eeuwige rust, Heer." },
      r: { la: "Et lux perpétua lúceat eis.", es: "Y brille sobre ellos la luz perpetua.", en: "And let perpetual light shine upon them.", nl: "En het eeuwig licht verlichte hen." } },

    { kind: "verse",
      v: { la: "Requiéscant in pace.", es: "Descansen en paz.", en: "May they rest in peace.", nl: "Mogen zij rusten in vrede." },
      r: { la: "Amen.", es: "Amén.", en: "Amen.", nl: "Amen." } },

    { kind: "verse",
      v: { la: "Dómine, exáudi oratiónem meam.", es: "Señor, escucha mi oración.", en: "O Lord, hear my prayer.", nl: "Heer, verhoor mijn gebed." },
      r: { la: "Et clamor meus ad te véniat.", es: "Y llegue a ti mi clamor.", en: "And let my cry come unto thee.", nl: "En laat mijn roepen tot U komen." } },

    { kind: "rubric",
      la: "Sacérdos, si Preces modérátur, exsúrgit et áddit Dóminus vobíscum, stans étiam dum recitat oratiónem.",
      es: "Si un sacerdote dirige las Preces, se alza y añade: El Señor esté con vosotros, permaneciendo en pie también mientras recita la oración.",
      en: "If a priest is leading the Preces, he stands and adds \"The Lord be with you,\" remaining standing while he recites the prayer.",
      nl: "Als een priester de Preces leidt, staat hij op en voegt hij toe: \u201cDe Heer zij met u,\u201d en blijft hij ook staan terwijl hij het gebed uitspreekt." },

    { kind: "verse",
      v: { la: "Dóminus vobíscum.", es: "El Señor esté con vosotros.", en: "The Lord be with you.", nl: "De Heer zij met u." },
      r: { la: "Et cum spíritu tuo.", es: "Y con tu espíritu.", en: "And with your spirit.", nl: "En met uw geest." } },

    { kind: "label", la: "Orémus.", es: "Oremos.", en: "Let us pray.", nl: "Laat ons bidden." },

    { kind: "prayer",
      la: "Deus, cui próprium est miseréri semper et párcere: súscipe deprecatiónem nostram. Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut tibi casto córpore serviámus, et mundo corde placeámus.",
      es: "Oh Dios, de quien es propio compadecerse siempre y perdonar: acoge nuestra súplica. Enciende, Señor, nuestras entrañas y nuestro corazón con el fuego del Espíritu Santo: para que te sirvamos con un comportamiento casto y te agrademos por nuestro corazón limpio.",
      en: "O God, whose nature it is ever to have mercy and to forgive: receive our petition, and set our hearts and minds ablaze with the fire of the Holy Spirit, O Lord, that we may serve thee with a chaste life and please thee with a clean heart.",
      nl: "O God, wiens eigenschap het is altijd barmhartig te zijn en te vergeven: aanvaard onze smeekbede. Ontsteek, Heer, ons binnenste en ons hart met het vuur van de Heilige Geest, opdat wij U met een kuis leven mogen dienen en U met een zuiver hart mogen behagen." },

    { kind: "prayer",
      la: "Actiónes nostras, quǽsumus Dómine, aspirándo prǽveni et adiuvándo proséquere: ut cuncta nostra orátio et operátio a te semper incípiat, et per te cœpta finiátur. Per Christum Dóminum nostrum.",
      es: "Te pedimos, Señor, que te anticipes a nuestras acciones inspirándolas y que las acompañes sosteniéndolas: para que toda nuestra oración y actuación empiece en ti y por ti llegue a cumplimiento lo iniciado. Por Cristo nuestro Señor.",
      en: "We beseech thee, O Lord, to go before our actions with thy inspiration and to accompany them with thy help, that all our prayer and work may always begin from thee, and through thee be brought to completion. Through Christ our Lord.",
      nl: "Wij vragen U, Heer, onze daden vooraf te gaan met uw ingeving en te vergezellen met uw hulp, opdat al ons bidden en handelen altijd van U moge uitgaan en door U tot voltooiing worde gebracht. Door Christus onze Heer." },

    { kind: "responseOnly", r: { la: "Amen.", es: "Amén.", en: "Amen.", nl: "Amen." } },

    { kind: "label", la: "Omnes dicunt:", es: "Todos dicen:", en: "All say:", nl: "Allen zeggen:" },

    { kind: "prayer",
      la: "Gáudium cum pace, emendatiónem vitæ, spátium veræ pœniténtiæ, grátiam et consolatiónem Sancti Spíritus atque in Ópere Dei perseverántiam, tríbuat nobis Omnípotens et Miséricors Dóminus.",
      es: "Que el Señor omnipotente y misericordioso nos conceda la alegría y la paz, la conversión de nuestra vida, un tiempo de verdadera penitencia, la gracia y el consuelo del Espíritu Santo y la perseverancia en el Opus Dei.",
      en: "May the Almighty and Merciful Lord grant us joy with peace, amendment of life, room for true penance, the grace and consolation of the Holy Spirit, and perseverance in Opus Dei.",
      nl: "Moge de Almachtige en Barmhartige Heer ons vreugde met vrede schenken, verbetering van leven, ruimte voor ware boetvaardigheid, de genade en troost van de Heilige Geest, en volharding in het Opus Dei." },

    { kind: "verse", v: { la: "Sancte Míchaël.", es: "San Miguel.", en: "Saint Michael.", nl: "Heilige Michaël." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },
    { kind: "verse", v: { la: "Sancte Gábriel.", es: "San Gabriel.", en: "Saint Gabriel.", nl: "Heilige Gabriël." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },
    { kind: "verse", v: { la: "Sancte Ráphaël.", es: "San Rafael.", en: "Saint Raphael.", nl: "Heilige Rafaël." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },
    { kind: "verse", v: { la: "Sancte Petre.", es: "San Pedro.", en: "Saint Peter.", nl: "Heilige Petrus." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },
    { kind: "verse", v: { la: "Sancte Paule.", es: "San Pablo.", en: "Saint Paul.", nl: "Heilige Paulus." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },
    { kind: "verse", v: { la: "Sancte Ioánnes.", es: "San Juan.", en: "Saint John.", nl: "Heilige Johannes." },
      r: { la: "Ora pro nobis.", es: "Ruega por nosotros.", en: "Pray for us.", nl: "Bid voor ons." } },

    { kind: "rubric",
      la: "Cum adsit áliquis Sacérdos, dígnior ait:",
      es: "Cuando esté presente algún sacerdote, el que hace cabeza dice:",
      en: "When a priest is present, the one presiding says:",
      nl: "Wanneer er een priester aanwezig is, zegt degene die voorgaat:" },

    { kind: "prayer", la: "Iube, Domne, benedícere.", es: "Dígnate, padre, bendecirnos.", en: "Pray, Father, give the blessing.", nl: "Vader, geef ons uw zegen." },

    { kind: "rubric", la: "Sacérdos benedícit:", es: "El sacerdote bendice:", en: "The priest blesses:", nl: "De priester zegent:" },

    { kind: "prayer",
      la: "Dóminus sit in córdibus vestris, et in lábiis vestris, in nómine Patris \u2020 et Fílii et Spíritus Sancti.",
      es: "Que el Señor esté en vuestros corazones y en vuestros labios, en el nombre del Padre \u2020 y del Hijo y del Espíritu Santo.",
      en: "May the Lord be in your hearts and on your lips, in the name of the Father, \u2020 and of the Son, and of the Holy Spirit.",
      nl: "Moge de Heer in uw hart zijn en op uw lippen, in de naam van de Vader, \u2020 en de Zoon, en de Heilige Geest." },

    { kind: "responseOnly", r: { la: "Amen.", es: "Amén.", en: "Amen.", nl: "Amen." } },

    { kind: "verse", v: { la: "Pax.", es: "Paz.", en: "Peace.", nl: "Vrede." },
      r: { la: "In ætérnum.", es: "Para siempre.", en: "For ever.", nl: "In eeuwigheid." } }
  ]
};
