/* ============================================================
   GEBEDEN — Devotional prayers (EN / NL / DE / LA / ES)
   ============================================================ */

const PRAYERS = [
  {
    id: "signum-crucis",
    category: "daily",
    title: { en: "Sign of the Cross", nl: "Kruisteken", de: "Kreuzzeichen", es: "Señal de la Cruz", la: "Signum Crucis" },
    text: {
      en: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      nl: "In de naam van de Vader, en de Zoon, en de Heilige Geest. Amen.",
      de: "Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.",
      es: "En el nombre del Padre, del Hijo y del Espíritu Santo. Amén.",
      la: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen."
    }
  },
  {
    id: "credo",
    category: "daily",
    title: { en: "Apostles' Creed", nl: "Apostolische Geloofsbelijdenis", de: "Apostolisches Glaubensbekenntnis", es: "Credo de los Apóstoles", la: "Symbolum Apostolorum" },
    text: {
      en: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
      nl: "Ik geloof in God, de almachtige Vader, Schepper van hemel en aarde. En in Jezus Christus, zijn enige Zoon, onze Heer, die ontvangen is van de Heilige Geest, geboren uit de maagd Maria; die geleden heeft onder Pontius Pilatus, is gekruisigd, gestorven en begraven; die nedergedaald is ter helle, de derde dag verrezen uit de doden; die opgevaren is ten hemel en zit aan de rechterhand van God, zijn almachtige Vader; vandaar zal Hij komen oordelen de levenden en de doden. Ik geloof in de Heilige Geest, de heilige katholieke Kerk, de gemeenschap van de heiligen, de vergiffenis van de zonden, de verrijzenis van het lichaam, en het eeuwig leven. Amen.",
      de: "Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, und an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn, empfangen durch den Heiligen Geist, geboren von der Jungfrau Maria, gelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben, hinabgestiegen in das Reich des Todes, am dritten Tage auferstanden von den Toten, aufgefahren in den Himmel; er sitzt zur Rechten Gottes, des allmächtigen Vaters; von dort wird er kommen, zu richten die Lebenden und die Toten. Ich glaube an den Heiligen Geist, die heilige katholische Kirche, Gemeinschaft der Heiligen, Vergebung der Sünden, Auferstehung der Toten und das ewige Leben. Amen.",
      es: "Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra. Y en Jesucristo, su único hijo, nuestro Señor, que fue concebido por obra del Espíritu Santo, nació de la Virgen María, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos; al tercer día resucitó de entre los muertos, subió a los cielos, está sentado a la derecha de Dios, Padre todopoderoso. De ahí ha de venir a juzgar a los vivos y a los muertos. Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne, la vida eterna. Amén.",
      la: "Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum: qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen."
    }
  },
  {
    id: "pater-noster",
    category: "daily",
    title: { en: "Our Father", nl: "Onze Vader", de: "Vaterunser", es: "Padre Nuestro", la: "Pater Noster" },
    text: {
      en: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      nl: "Onze Vader, die in de hemel zijt, uw naam worde geheiligd, uw rijk kome, uw wil geschiede op aarde zoals in de hemel. Geef ons heden ons dagelijks brood en vergeef ons onze schulden, zoals ook wij vergeven aan onze schuldenaren, en breng ons niet in beproeving, maar verlos ons van het kwade. Amen.",
      de: "Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unsern Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Amen.",
      es: "Padre nuestro, que estás en el cielo, santificado sea tu nombre, venga a nosotros tu reino, hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día, y perdona nuestras deudas así como nosotros perdonamos a nuestros deudores. No nos dejes caer en tentación y líbranos del mal. Amén.",
      la: "Pater noster, qui es in cælis: sanctificétur nomen tuum; advéniat regnum tuum; fiat volúntas tua, sicut in cælo, et in terra. Panem nostrum cotidiánum da nobis hódie; et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris; et ne nos indúcas in tentatiónem; sed líbera nos a malo. Amen."
    }
  },
  {
    id: "ave-maria",
    category: "daily",
    title: { en: "Hail Mary", nl: "Wees Gegroet", de: "Gegrüßet seist du, Maria", es: "Dios te Salve María", la: "Ave Maria" },
    text: {
      en: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      nl: "Wees gegroet, Maria, vol van genade, de Heer is met u. Gij zijt de gezegende onder de vrouwen en gezegend is Jezus, de vrucht van uw schoot. Heilige Maria, Moeder van God, bid voor ons, zondaars, nu en in het uur van onze dood. Amen.",
      de: "Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus. Heilige Maria, Mutter Gottes, bitte für uns Sünder, jetzt und in der Stunde unseres Todes. Amen.",
      es: "Dios te salve María, llena eres de gracia, el Señor es contigo, bendita eres entre todas las mujeres y bendito es el fruto de tu vientre Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
      la: "Ave María, grátia plena, Dóminus tecum. Benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen."
    }
  },
  {
    id: "gloria-patri",
    category: "daily",
    title: { en: "Glory Be", nl: "Eer aan de Vader", de: "Ehre sei dem Vater", es: "Gloria sea", la: "Gloria Patri" },
    text: {
      en: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      nl: "Eer aan de Vader, en de Zoon, en de Heilige Geest. Zoals het was in het begin, en nu, en altijd, tot in de eeuwen der eeuwen. Amen.",
      de: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und alle Zeit und in Ewigkeit. Amen.",
      es: "Gloria sea al Padre, al Hijo y al Espíritu Santo, como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
      la: "Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen."
    }
  },
  {
    id: "fatima",
    category: "daily",
    title: { en: "O My Jesus (Fatima Prayer)", nl: "O mijn Jezus (Fátima-gebed)", de: "O mein Jesus (Fátima-Gebet)", es: "Oh mi Jesús (Oración de Fátima)" },
    text: {
      en: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of thy mercy. Amen.",
      nl: "O mijn Jezus, vergeef ons onze zonden, behoed ons voor het vuur van de hel, breng alle zielen naar de Hemel, vooral diegenen die uw barmhartigheid het meeste nodig hebben. Amen.",
      de: "O mein Jesus, verzeih uns unsere Sünden, bewahre uns vor dem Feuer der Hölle, führe alle Seelen in den Himmel, besonders jene, die deiner Barmherzigkeit am meisten bedürfen. Amen.",
      es: "Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva todas las almas al cielo, especialmente aquellas que más lo necesitan. Amén."
    }
  },
  {
    id: "salve-regina",
    category: "daily",
    title: { en: "Hail, Holy Queen", nl: "Wees Gegroet, Koningin", de: "Sei gegrüßt, o Königin", es: "Salve Regina", la: "Salve Regina" },
    text: {
      en: "Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.",
      nl: "Wees gegroet, Koningin, Moeder van barmhartigheid; ons leven, onze vreugde en onze hoop, wees gegroet. Tot u roepen wij, ballingen, kinderen van Eva; tot u smeken wij, zuchtend en wenend in dit dal van tranen. Daarom dan, onze voorspreekster, sla op ons uw barmhartige ogen; en toon ons, na deze ballingschap, Jezus, de gezegende vrucht van uw schoot. O goedertieren, o liefdevolle, o zoete Maagd Maria.",
      de: "Sei gegrüßt, o Königin, Mutter der Barmherzigkeit, unser Leben, unsre Wonne, unsre Hoffnung, sei gegrüßt. Zu dir rufen wir verbannte Kinder Evas, zu dir seufzen wir trauernd und weinend in diesem Tal der Tränen. Wohlan denn, unsere Fürsprecherin, wende zu uns deine barmherzigen Augen, und nach diesem Elend zeige uns Jesus, die gebenedeite Frucht deines Leibes. O gütige, o milde, o süße Jungfrau Maria.",
      la: "Salve, Regína, Mater misericórdiæ, vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Evæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, O pia, O dulcis Virgo María."
    }
  },
  {
    id: "veni-sancte-spiritus",
    category: "daily",
    title: { en: "Come, Holy Spirit", nl: "Kom, Heilige Geest", de: "Komm, Heiliger Geist", es: "Ven Espíritu Santo", la: "Veni, Sancte Spíritus" },
    text: {
      en: "Come, Holy Spirit, fill the hearts of your faithful, and kindle in them the fire of your love. Send forth your Spirit, and they shall be created. And you shall renew the face of the earth.",
      nl: "Kom, Heilige Geest, vervul de harten van uw gelovigen en ontsteek in hen het vuur van uw liefde. Zend uw Geest uit, en alles zal herschapen worden. En Gij zult het aanschijn van de aarde vernieuwen.",
      de: "Komm, Heiliger Geist, erfülle die Herzen deiner Gläubigen und entzünde in ihnen das Feuer deiner Liebe. Sende aus deinen Geist, und alles wird neu geschaffen. Und du wirst das Antlitz der Erde erneuern.",
      la: "Veni, Sancte Spíritus, reple tuórum corda fidélium, et tui amóris in eis ignem accénde. Emítte Spíritum tuum, et creabúntur. Et renovábis fáciem terræ."
    },
    note: {
      en: "Let us pray. O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Spirit we may be truly wise and ever enjoy his consolation. Through Christ our Lord. Amen.",
      nl: "Laat ons bidden. God, Gij hebt de harten van de gelovigen door de verlichting van de Heilige Geest onderwezen: geef dat wij door die Heilige Geest de ware wijsheid mogen bezitten, en ons altijd over zijn vertroosting mogen verblijden. Door Christus onze Heer. Amen.",
      de: "Lasset uns beten. O Gott, du hast die Herzen der Gläubigen durch das Licht des Heiligen Geistes belehrt. Gib uns, in diesem Geiste zu erkennen, was recht ist, und uns immer seines Trostes zu erfreuen. Durch Christus, unsern Herrn. Amen.",
      la: "Orémus. Deus, qui corda fidélium Sancti Spíritus illustratióne docuísti, da nobis in eódem Spíritu recta sápere, et de eius semper consolatióne gaudére. Per Christum Dóminum nostrum. Amen."
    }
  },
  {
    id: "angelus",
    category: "daily",
    title: { en: "Angelus", nl: "Engel des Heren", de: "Der Engel des Herrn", la: "Angelus Domini" },
    text: {
      en: "V. The Angel of the Lord declared unto Mary,<br>R. And she conceived of the Holy Spirit.<br>Hail Mary…<br><br>V. Behold the handmaid of the Lord,<br>R. Be it done unto me according to thy word.<br>Hail Mary…<br><br>V. And the Word was made flesh,<br>R. And dwelt among us.<br>Hail Mary…<br><br>V. Pray for us, O holy Mother of God,<br>R. That we may be made worthy of the promises of Christ.",
      nl: "V. De Engel des Heren heeft aan Maria geboodschapt,<br>R. En zij heeft ontvangen van de Heilige Geest.<br>Wees gegroet…<br><br>V. Zie de dienstmaagd des Heren.<br>R. Mij geschiede naar uw woord.<br>Wees gegroet…<br><br>V. En het Woord is vlees geworden.<br>R. En het heeft onder ons gewoond.<br>Wees gegroet…<br><br>V. Bid voor ons, heilige Moeder van God,<br>R. Opdat wij de beloften van Christus waardig worden.",
      de: "V. Der Engel des Herrn brachte Maria die Botschaft.<br>R. Und sie empfing vom Heiligen Geist.<br>Gegrüßet seist du, Maria…<br><br>V. Maria sprach: Siehe, ich bin die Magd des Herrn.<br>R. Mir geschehe nach deinem Wort.<br>Gegrüßet seist du, Maria…<br><br>V. Und das Wort ist Fleisch geworden.<br>R. Und hat unter uns gewohnt.<br>Gegrüßet seist du, Maria…<br><br>V. Bitte für uns, heilige Gottesmutter,<br>R. Dass wir würdig werden der Verheißungen Christi.",
      es:"...",
      la: "V. Ángelus Dómini nuntiávit Maríæ,<br>R. Et concépit de Spíritu Sancto.<br>Ave María…<br><br>V. Ecce ancílla Dómini.<br>R. Fiat mihi secúndum verbum tuum.<br>Ave María…<br><br>V. Et Verbum caro factum est,<br>R. Et habitávit in nobis.<br>Ave María…<br><br>V. Ora pro nobis, sancta Dei Génitrix,<br>R. Ut digni efficiámur promissiónibus Christi."
    },
    note: {
      en: "Let us pray. Pour forth, we beseech thee, O Lord, thy grace into our hearts, that we, to whom the Incarnation of Christ, thy Son, was made known by the message of an angel, may by his Passion and Cross be brought to the glory of his Resurrection. Through the same Christ our Lord. Amen.",
      nl: "Laat ons bidden. Heer, wij hebben door de boodschap van de Engel de menswording van Christus, uw Zoon, leren kennen; wij bidden U: stort uw genade in onze harten, opdat wij door zijn lijden en kruis gebracht worden tot de heerlijkheid van de verrijzenis. Door Christus onze Heer. Amen.",
      de: "Lasset uns beten. Allmächtiger Gott, gieße deine Gnade in unsere Herzen ein. Durch die Botschaft des Engels haben wir die Menschwerdung Christi, deines Sohnes, erkannt. Führe uns durch sein Leiden und Kreuz zur Herrlichkeit der Auferstehung. Darum bitten wir durch Christus, unsern Herrn. Amen.",
      la: "Orémus. Grátiam tuam, quaésumus, Dómine, méntibus nostris infúnde, ut qui, Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per passiónem eius et crucem ad resurrectiónis glóriam perducámur. Per Christum Dóminum nostrum. Amen."
    }
  },
  {
    id: "three-hail-marys",
    category: "rosary",
    title: { en: "Three Hail Marys", nl: "Drie Weesgegroetjes", de: "Drei Ave Maria", la: "Tres Ave María" },
    text: {
      en: "Hail Mary, Daughter of God the Father…<br><br>Hail Mary, Mother of God the Son…<br><br>Hail Mary, Spouse of God the Holy Spirit…",
      nl: "Wees gegroet, Maria, Dochter van God de Vader…<br><br>Wees gegroet, Maria, Moeder van God de Zoon…<br><br>Wees gegroet, Maria, Bruid van de Heilige Geest…",
      de: "Gegrüßet seist du, Maria, Tochter Gottes des Vaters…<br><br>Gegrüßet seist du, Maria, Mutter Gottes des Sohnes…<br><br>Gegrüßet seist du, Maria, Braut Gottes des Heiligen Geistes…",
      la: "Ave María, fília Dei Patris…<br><br>Ave María, mater Dei Fílii…<br><br>Ave María, sponsa Spíritus Sancti…"
    }
  },
  {
    id: "grace-before-meals",
    category: "daily",
    title: { en: "Grace Before Meals", nl: "Tafelgebed (vóór het eten)", de: "Tischgebet (vor dem Essen)", la: "Benedíctio Mensæ (ante cibum)" },
    text: {
      en: "V. Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty. Through Christ our Lord.<br>R. Amen.<br><br>V. May the King of everlasting glory make us partakers of the heavenly table.<br>R. Amen.",
      nl: "V. Heer, zegen ons en deze gaven, die wij van uw mildheid zullen ontvangen. Door Christus onze Heer.<br>R. Amen.<br><br>V. De Koning van de eeuwige heerlijkheid make ons tot deelgenoten van het hemels gastmaal.<br>R. Amen.",
      de: "V. Herr, segne uns und diese Gaben, die wir von deiner Güte nun empfangen, durch Christus, unseren Herrn.<br>R. Amen.<br><br>V. Zum Gastmahl des ewigen Lebens führe uns der König der Herrlichkeit.<br>R. Amen.",
      la: "V. Bénedic, Dómine, nos et hæc tua dona, quæ de tua largitáte sumus sumptúri. Per Christum Dóminum nostrum.<br>R. Amen.<br><br>V. Mensæ cæléstis partícipes fáciat nos, Rex ætérnæ glóriæ.<br>R. Amen."
    }
  },
  {
    id: "grace-after-meals",
    category: "daily",
    title: { en: "Grace After Meals", nl: "Dankgebed (na het eten)", de: "Tischgebet (nach dem Essen)", la: "Grátiárum Áctio (post cibum)" },
    text: {
      en: "V. We give Thee thanks, Almighty God, for all Thy benefits, Who livest and reignest world without end.<br>R. Amen.<br><br>V. The Lord grant us his peace.<br>R. And life everlasting. Amen.",
      nl: "V. Almachtige God, wij danken U voor al uw weldaden, Gij die leeft en heerst in de eeuwen der eeuwen.<br>R. Amen.<br><br>V. De Heer geve ons zijn vrede.<br>R. En het eeuwig leven. Amen.",
      de: "V. Wir danken dir, allmächtiger Gott, für alle deine Wohltaten, der du lebst und herrschest in Ewigkeit.<br>R. Amen.<br><br>V. Der Herr schenke uns seinen Frieden.<br>R. Und das ewige Leben. Amen.",
      la: "V. Ágimus tibi grátias, omnípotens Deus, pro univérsis benefíciis tuis, qui vivis et regnas in sæcula sæculórum.<br>R. Amen.<br><br>V. Deus det nobis suam pacem.<br>R. Et vitam ætérnam. Amen."
    }
  },
  {
    id: "litany-loreto",
    category: "rosary",
    title: { en: "Litany of Loreto", nl: "Litanie van Loreto", de: "Lauretanische Litanei", la: "Litánia Laurétana" },
    text: {
      en: "Lord, have mercy. Christ, have mercy. Lord, have mercy.<br>Christ, hear us. Christ, graciously hear us.<br>God the Father of heaven, have mercy on us. God the Son, Redeemer of the world, have mercy on us. God the Holy Spirit, have mercy on us. Holy Trinity, one God, have mercy on us.<br><br><em>(Response after each title below: pray for us.)</em><br>Holy Mary<br>Holy Mother of God<br>Holy Virgin of virgins<br>Mother of Christ<br>Mother of the Church<br>Mother of Mercy<br>Mother of divine grace<br>Mother of Hope<br>Mother most pure<br>Mother most chaste<br>Mother inviolate<br>Mother undefiled<br>Mother most amiable<br>Mother most admirable<br>Mother of good counsel<br>Mother of our Creator<br>Mother of our Savior<br>Virgin most prudent<br>Virgin most venerable<br>Virgin most renowned<br>Virgin most powerful<br>Virgin most merciful<br>Virgin most faithful<br>Mirror of justice<br>Seat of wisdom<br>Cause of our joy<br>Spiritual vessel<br>Vessel of honor<br>Singular vessel of devotion<br>Mystical rose<br>Tower of David<br>Tower of ivory<br>House of gold<br>Ark of the covenant<br>Gate of heaven<br>Morning star<br>Health of the sick<br>Refuge of sinners<br>Solace of migrants<br>Comfort of the afflicted<br>Help of Christians<br><br>Queen of Angels<br>Queen of Patriarchs<br>Queen of Prophets<br>Queen of Apostles<br>Queen of Martyrs<br>Queen of Confessors<br>Queen of Virgins<br>Queen of all Saints<br>Queen conceived without original sin<br>Queen assumed into Heaven<br>Queen of the most holy Rosary<br>Queen of families<br>Queen of Peace",
      nl: "Heer, ontferm U over ons. Christus, ontferm U over ons. Heer, ontferm U over ons.<br>Christus, aanhoor ons. Christus, verhoor ons.<br>God, hemelse Vader, ontferm U over ons. God, Zoon, Verlosser van de wereld, ontferm U over ons. God, heilige Geest, ontferm U over ons. Heilige Drievuldigheid, één God, ontferm U over ons.<br><br><em>(Antwoord na elke titel hieronder: bid voor ons.)</em><br>Heilige Maria<br>Heilige Moeder van God<br>Heilige Maagd der maagden<br>Moeder van Christus<br>Moeder van de Kerk<br>Moeder van barmhartigheid<br>Moeder van de goddelijke Genade<br>Moeder van de hoop<br>Allerreinste Moeder<br>Zeer kuise Moeder<br>Maagdelijke Moeder<br>Onbevlekte Moeder<br>Beminnelijke Moeder<br>Bewonderenswaardige Moeder<br>Moeder van goede raad<br>Moeder van de Schepper<br>Moeder van de Zaligmaker<br>Allervoorzichtigste Maagd<br>Eerwaardige Maagd<br>Lofwaardige Maagd<br>Machtige Maagd<br>Goedertieren Maagd<br>Getrouwe Maagd<br>Spiegel van gerechtigheid<br>Zetel van Wijsheid<br>Oorzaak van onze Blijdschap<br>Geestelijk vat<br>Eerwaardig vat<br>Heerlijk vat van godsvrucht<br>Mystieke roos<br>Toren van David<br>Ivoren toren<br>Gouden huis<br>Ark van het verbond<br>Deur van de hemel<br>Morgenster<br>Heil van de zieken<br>Toevlucht van de zondaren<br>Troost van de migranten<br>Troosteres van de bedroefden<br>Hulp van de christenen<br><br>Koningin van de engelen<br>Koningin van de aartsvaders<br>Koningin van de profeten<br>Koningin van de apostelen<br>Koningin van de martelaren<br>Koningin van de belijders<br>Koningin van de maagden<br>Koningin van alle heiligen<br>Koningin zonder erfsmet ontvangen<br>Koningin in de hemel opgenomen<br>Koningin van de heilige rozenkrans<br>Koningin van het gezin<br>Koningin van de vrede",
      de: "Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.<br>Christus, höre uns. Christus, erhöre uns.<br>Gott Vater im Himmel, erbarme dich unser. Gott Sohn, Erlöser der Welt, erbarme dich unser. Gott Heiliger Geist, erbarme dich unser. Heilige Dreifaltigkeit, ein einiger Gott, erbarme dich unser.<br><br><em>(Antwort nach jedem Titel unten: bitte für uns.)</em><br>Heilige Maria<br>Heilige Mutter Gottes<br>Heilige Jungfrau der Jungfrauen<br>Mutter Christi<br>Mutter der Kirche<br>Mutter der Barmherzigkeit<br>Mutter der göttlichen Gnade<br>Mutter der Hoffnung<br>Du reine Mutter<br>Du keusche Mutter<br>Du unversehrte Mutter<br>Du unbefleckte Mutter<br>Du liebenswürdige Mutter<br>Du wunderbare Mutter<br>Du Mutter des guten Rates<br>Du Mutter des Schöpfers<br>Du Mutter des Erlösers<br>Du weise Jungfrau<br>Du ehrwürdige Jungfrau<br>Du lobwürdige Jungfrau<br>Du mächtige Jungfrau<br>Du gütige Jungfrau<br>Du getreue Jungfrau<br>Du Spiegel der göttlichen Heiligkeit<br>Du Sitz der Weisheit<br>Du Ursache unserer Freude<br>Du Tempel des Heiligen Geistes<br>Du Tabernakel der ewigen Herrlichkeit<br>Du Wohnung, ganz Gott geweiht<br>Du geheimnisvolle Rose<br>Du Turm Davids<br>Du elfenbeinerner Turm<br>Du goldenes Haus<br>Du Arche des Bundes<br>Du Pforte des Himmels<br>Du Morgenstern<br>Du Heil der Kranken<br>Du Zuflucht der Sünder<br>Du Trost der Migranten<br>Du Trösterin der Betrübten<br>Du Hilfe der Christen<br><br>Du Königin der Engel<br>Du Königin der Patriarchen<br>Du Königin der Propheten<br>Du Königin der Apostel<br>Du Königin der Märtyrer<br>Du Königin der Bekenner<br>Du Königin der Jungfrauen<br>Du Königin aller Heiligen<br>Du Königin, ohne Makel der Erbsünde empfangen<br>Du Königin, in den Himmel aufgenommen<br>Du Königin des heiligen Rosenkranzes<br>Du Königin der Familie<br>Du Königin des Friedens",
      la: "Kýrie, eléison. Christe, eléison. Kýrie, eléison.<br>Christe, audi nos. Christe, exáudi nos.<br>Pater de cælis, Deus, miserére nobis. Fili, Redémptor mundi, Deus, miserére nobis. Spíritus Sancte, Deus, miserére nobis. Sancta Trínitas, unus Deus, miserére nobis.<br><br><em>(Post quamque invocatiónem: ora pro nobis.)</em><br>Sancta María<br>Sancta Dei Génetrix<br>Sancta Virgo vírginum<br>Mater Christi<br>Mater Ecclésiæ<br>Mater misericórdiæ<br>Mater Divínæ grátiæ<br>Mater spei<br>Mater puríssima<br>Mater castíssima<br>Mater invioláta<br>Mater intemeráta<br>Mater amábilis<br>Mater admirábilis<br>Mater boni Consílii<br>Mater Creatóris<br>Mater Salvatóris<br>Virgo prudentíssima<br>Virgo veneránda<br>Virgo prædicánda<br>Virgo potens<br>Virgo clemens<br>Virgo fidélis<br>Spéculum iustítiæ<br>Sedes sapiéntiæ<br>Causa nostræ lætítiæ<br>Vas spirituále<br>Vas honorábile<br>Vas insígne devotiónis<br>Rosa mýstica<br>Turris Davídica<br>Turris ebúrnea<br>Domus áurea<br>Fœderis arca<br>Iánua cæli<br>Stella matutína<br>Salus infirmórum<br>Refúgium peccatórum<br>Solácium migrántium<br>Consolátrix afflictórum<br>Auxílium Christianórum<br><br>Regína Angelórum<br>Regína Patriarchárum<br>Regína Prophetárum<br>Regína Apostolórum<br>Regína Mártyrum<br>Regína Confessórum<br>Regína Vírginum<br>Regína Sanctórum ómnium<br>Regína sine labe originali concépta<br>Regína in cælum assúmpta<br>Regína sacratíssimi Rosárii<br>Regína famíliæ<br>Regína pacis"
    },
    note: {
      en: "Lamb of God, who takes away the sins of the world, spare us, O Lord.<br>Lamb of God, who takes away the sins of the world, graciously hear us, O Lord.<br>Lamb of God, who takes away the sins of the world, have mercy on us.<br><br>V. Pray for us, O holy Mother of God.<br>R. That we may be made worthy of the promises of Christ.<br><br>Let us pray. Grant, we beseech Thee, O Lord God, that we thy servants may enjoy perpetual health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, may be delivered from present sorrow and obtain eternal joy. Through Christ our Lord. Amen.",
      nl: "Lam Gods, dat de zonden van de wereld wegneemt, spaar ons Heer.<br>Lam Gods, dat de zonden van de wereld wegneemt, verhoor ons Heer.<br>Lam Gods, dat de zonden van de wereld wegneemt, ontferm U over ons.<br><br>V. Bid voor ons, heilige Moeder van God.<br>R. Opdat wij de beloften van Christus waardig worden.<br><br>Laat ons bidden. Heer God, wij bidden U: geef ons, uw dienaren, dat wij ons mogen verheugen in een bestendige gezondheid van ziel en lichaam; mogen wij door de verheven voorspraak van de heilige Maria, die altijd maagd is gebleven, verlost worden van de tegenwoordige droefheid en de eeuwige vreugde genieten. Door Christus, onze Heer. Amen.",
      de: "Lamm Gottes, du nimmst hinweg die Sünden der Welt, verschone uns, o Herr.<br>Lamm Gottes, du nimmst hinweg die Sünden der Welt, erhöre uns, o Herr.<br>Lamm Gottes, du nimmst hinweg die Sünden der Welt, erbarme dich unser.<br><br>V. Bitte für uns, o heilige Gottesmutter.<br>R. Auf dass wir würdig werden der Verheißungen Christi.<br><br>Lasset uns beten. Gütiger Gott, du hast allen Menschen Maria zur Mutter gegeben; höre auf ihre Fürsprache; nimm von uns die Traurigkeit dieser Zeit, dereinst aber gib uns die ewige Freude. Durch Christus, unsern Herrn. Amen.",
      la: "Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine.<br>Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine.<br>Agnus Dei, qui tollis peccáta mundi, miserére nobis.<br><br>V. Ora pro nobis, sancta Dei Génetrix.<br>R. Ut digni efficiámur promissiónibus Christi.<br><br>Orémus. Concéde nos fámulos tuos, quæsumus, Dómine Deus, perpétua mentis et córporis sanitáte gaudére: et gloriósa beátæ Maríæ semper Vírginis intercessióne, a præsénti liberári tristítia, et ætérna pérfrui lætítia. Per Christum Dóminum nostrum. Amen."
    }
  },
  {
    id: "visit-blessed-sacrament",
    category: "opusdei",
    title: { en: "Visit to the Blessed Sacrament", nl: "Bezoek aan het Allerheiligste Sacrament", de: "Besuch beim Allerheiligsten Sakrament", la: "Visitátio Sanctíssimi Sacraménti" },
    text: {
      en: "O Sacrament most holy, O Sacrament divine. All praise and all thanksgiving be every moment thine.<br><br>Our Father, Hail Mary, Glory Be (three times).<br><br>O Sacrament most holy, O Sacrament divine. All praise and all thanksgiving be every moment thine.",
      nl: "Geloofd en aanbeden zij in eeuwigheid het Allerheiligste Sacrament!<br><br>Onze Vader, Wees Gegroet, Eer aan de Vader (driemaal).<br><br>Geloofd en aanbeden zij in eeuwigheid het Allerheiligste Sacrament!",
      de: "Lasset uns immerdar das heiligste Sakrament verehren.<br><br>Vaterunser, Ave Maria, Ehre sei dem Vater (dreimal).<br><br>Lasset uns immerdar das heiligste Sakrament verehren.",
      la: "Adorémus in ætérnum Sanctíssimum Sacraméntum.<br><br>Pater noster, Ave María, Glória Patri (ter repetítur orátio).<br><br>Adorémus in ætérnum Sanctíssimum Sacraméntum."
    },
    note: {
      en: "Spiritual Communion. I wish, my Lord and my God, to receive You with the purity, humility and love with which your Most Holy Mother received You, and with the spirit and fervour of the Saints.",
      nl: "Geestelijke Communie. Ik zou U willen ontvangen, Heer, met die zuiverheid, nederigheid en toewijding waarmee Uw allerheiligste Moeder U ontving, en met de geest en de vurigheid van de heiligen.",
      de: "Geistliche Kommunion. Ich möchte dich empfangen, o Herr, mit jener Reinheit, Demut und Hingabe, mit der dich deine allerheiligste Mutter empfing, und mit dem Geist und Eifer der Heiligen.",
      la: "Commúnio Spirituális. Cúpio te suscípere, Dómine, cum ea puritáte, humilitáte et devotióne qua te suscépit sanctíssima Mater tua, et cum spíritu ac fervóre Sanctórum."
    }
  },
  {
    id: "opusdei-preces",
    category: "opusdei",
    title: { en: "Preces", nl: "Preces", de: "Preces", la: "Preces" },
    latinPrimary: true,
    lines: [
      { type: "plain", la: "Sérviam!", en: "I will serve!", nl: "Ik zal dienen!", de: "Ich werde dienen!" , es: "¡Te serviré!"},

      { type: "v", la: "Ad Trinitátem Beatíssimam.", en: "To the Most Holy Trinity.", nl: "Tot de Allerheiligste Drie-eenheid.", de: "An die Allerheiligste Dreifaltigkeit." , es: "A la Santísima Trinidad."},
      { type: "r", la: "Grátias tibi, Deus, grátias tibi: vera et una Trínitas, una et summa Déitas, sancta et una Únitas.", en: "Thanks be to thee, O God, thanks be to thee: true and one Trinity, one and supreme Godhead, holy and one Unity.", nl: "Dank U, o God, dank U: ware en ene Drie-eenheid, ene en allerhoogste Godheid, heilige en ene Eenheid.", de: "Dank sei dir, o Gott, Dank sei dir: wahre und eine Dreifaltigkeit, eine und höchste Gottheit, heilige und eine Einheit." , es: "Gracias a ti, Señor Dios; gracias a ti, Trinidad única y verdadera, Dios único y supremo, Unidad única y santa."},

      { type: "v", la: "Ad Iesum Christum Regem.", en: "To Jesus Christ the King.", nl: "Tot Jezus Christus, de Koning.", de: "An Jesus Christus, den König." , es: "A Jesucristo, Rey."},
      { type: "r", la: "Dóminus Iudex noster; Dóminus Légifer noster; Dóminus Rex noster. Ipse salvábit nos.", en: "The Lord is our judge; the Lord is our lawgiver; the Lord is our King. He himself will save us.", nl: "De Heer is onze rechter; de Heer is onze wetgever; de Heer is onze Koning. Hij zal ons redden.", de: "Der Herr ist unser Richter; der Herr ist unser Gesetzgeber; der Herr ist unser König. Er selbst wird uns retten." , es: "El Señor es nuestro juez. El Señor es nuestro legislador. El Señor es nuestro Rey. Él nos salvará."},

      { type: "v", la: "Christe, Fili Dei vivi, miserére nobis.", en: "Christ, Son of the living God, have mercy on us.", nl: "Christus, Zoon van de levende God, ontferm U over ons.", de: "Christus, Sohn des lebendigen Gottes, erbarme dich unser." , es: "Cristo, Hijo de Dios vivo, ten misericordia de nosotros."},
      { type: "r", la: "Christe, Fili Dei vivi, miserére nobis.", en: "Christ, Son of the living God, have mercy on us.", nl: "Christus, Zoon van de levende God, ontferm U over ons.", de: "Christus, Sohn des lebendigen Gottes, erbarme dich unser." , es: "Cristo, Hijo de Dios vivo, ten misericordia de nosotros."},

      { type: "v", la: "Exsúrge, Christe, ádiuva nos.", en: "Arise, O Christ, and help us.", nl: "Sta op, Christus, help ons.", de: "Steh auf, Christus, hilf uns." , es: "Levántate, oh Cristo, ayúdanos."},
      { type: "r", la: "Et líbera nos propter nomen tuum.", en: "And deliver us for your name's sake.", nl: "En bevrijd ons omwille van uw naam.", de: "Und befreie uns um deines Namens willen." , es: "Y líbra nos a causa de tu nombre."},

      { type: "v", la: "Dóminus illuminátio mea et salus mea: quem timébo?", en: "The Lord is my light and my salvation; whom shall I fear?", nl: "De Heer is mijn licht en mijn heil, voor wie zou ik vrezen?", de: "Der Herr ist mein Licht und mein Heil: vor wem sollte ich mich fürchten?" , es: "El Señor es mi luz y mi salvación, ¿a quién temeré?"},
      { type: "r", la: "Si consístant advérsum me castra, non timébit cor meum; si exsúrgat advérsum me prœlium, in hoc ego sperábo.", en: "Though an army encamp against me, my heart shall not fear; though war should rise against me, in this I will be confident.", nl: "Al legert zich een leger tegen mij, mijn hart zal niet vrezen; al verheft zich een strijd tegen mij, toch zal ik vertrouwen.", de: "Wenn sich ein Heer gegen mich lagert, fürchtet sich mein Herz nicht; erhebt sich Krieg gegen mich, bleibe ich dennoch voll Zuversicht." , es: "Si se levantan campamentos contra mí, mi corazón no temerá; si surge un combate en mi contra, en Él yo esperaré."},

      { type: "v", la: "Ad Beátam Vírginem Maríam Mediatrícem.", en: "To the Blessed Virgin Mary, Mediatrix.", nl: "Tot de Heilige Maagd Maria, Middelares.", de: "An die Heilige Jungfrau Maria, Mittlerin." , es: "A Santa María Virgen, mediadora."},
      { type: "r", la: "Recordáre, Virgo Mater Dei, dum stéteris in conspéctu Dómini, ut loquáris pro nobis bona.", en: "Remember, O Virgin Mother of God, as you stand in the presence of the Lord, to speak good things on our behalf.", nl: "Gedenk, Maagd en Moeder van God, terwijl u voor het aanschijn van de Heer staat, goede dingen over ons te zeggen.", de: "Gedenke, Jungfrau und Mutter Gottes, während du vor dem Angesicht des Herrn stehst, Gutes für uns zu sprechen." , es: "Acuérdate, oh Virgen Madre de Dios, mientras estás en la presencia del Señor, de hablar cosas buenas de nosotros."},

      { type: "v", la: "Ad Sanctum Ioseph Sponsum Beátæ Maríæ Vírginis.", en: "To Saint Joseph, Spouse of the Blessed Virgin Mary.", nl: "Tot de heilige Jozef, Bruidegom van de Heilige Maagd Maria.", de: "An den heiligen Josef, Bräutigam der seligen Jungfrau Maria." , es: "A San José, esposo de Santa María Virgen."},
      { type: "r", la: "Fecit te Deus quasi Patrem Regis, et dóminum univérsæ domus eius: ora pro nobis.", en: "God made you as it were the father of the King, and lord of his whole household: pray for us.", nl: "God heeft u aangesteld als het ware als vader van de Koning en heer van heel zijn huis: bid voor ons.", de: "Gott hat dich gleichsam zum Vater des Königs gemacht und zum Herrn seines ganzen Hauses: bitte für uns." , es: "Dios te estableció en el puesto de padre del Rey y en el de señor de toda su casa: ruega por nosotros."},

      { type: "v", la: "Ad Ángelos Custódes.", en: "To the Guardian Angels.", nl: "Tot de heilige Engelbewaarders.", de: "An die heiligen Schutzengel." , es: "A los Ángeles Custodios."},
      { type: "r", la: "Sancti Ángeli Custódes nostri, deféndite nos in prœlio ut non pereámus in treméndo iudício.", en: "Holy Guardian Angels of ours, defend us in battle, that we may not perish in the fearful judgment.", nl: "Heilige Engelbewaarders, verdedig ons in de strijd, opdat wij niet verloren gaan in het vreselijke oordeel.", de: "Heilige Schutzengel, verteidigt uns im Kampf, damit wir nicht im schrecklichen Gericht zugrunde gehen." , es: "Oh, Santos Ángeles Custodios nuestros, defendednos en el combate, para que no perezcamos en el temible juicio."},

      { type: "v", la: "Ad Sanctum Iosephmaríam Conditórem nostrum.", en: "To Saint Josemaría, our Founder.", nl: "Tot de heilige Jozefmaria, onze Stichter.", de: "An den heiligen Josefmaria, unseren Gründer." },
      { type: "r", la: "Intercéde pro fíliis tuis ut, fidéles spirítui Óperis Dei, labórem sanctificémus et ánimas Christo lucrifácere quærámus.", en: "Intercede for your children, that, faithful to the spirit of Opus Dei, we may sanctify our work and seek to win souls for Christ.", nl: "Kom tussenbeide voor uw kinderen, opdat wij, trouw aan de geest van het Opus Dei, ons werk heiligen en zielen voor Christus trachten te winnen.", de: "Tritt ein für deine Kinder, damit wir, treu dem Geist des Opus Dei, die Arbeit heiligen und Seelen für Christus zu gewinnen suchen." , es: "Intercede por tus hijos, para que, fieles al espíritu del Opus Dei, santifiquemos el trabajo y ganemos almas para Cristo."},

      { type: "v", la: "Orémus pro Beatíssimo Papa nostro N.", en: "Let us pray for our Most Holy Father, Pope N.", nl: "Laten wij bidden voor onze Allerheiligste Vader, Paus N.", de: "Lasset uns beten für unseren Heiligen Vater, Papst N." , es: "Oremos por el Santo Padre N."},
      { type: "r", la: "Dóminus consérvet eum, et vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in ánimam inimicórum eius.", en: "May the Lord preserve him, and give him life, and make him blessed upon the earth, and not deliver him into the hands of his enemies.", nl: "Moge de Heer hem bewaren, hem leven geven, hem gelukkig maken op aarde, en hem niet overleveren aan de macht van zijn vijanden.", de: "Der Herr bewahre ihn, gebe ihm Leben, mache ihn glücklich auf Erden und liefere ihn nicht der Macht seiner Feinde aus.", es: "Que el Señor lo guarde y lo llene de vida y lo haga santo en la tierra y no lo entregue en manos de sus enemigos." },

      { type: "v", la: "Orémus et pro Antístite huius diœcésis.", en: "Let us pray also for the Bishop of this diocese.", nl: "Laten wij ook bidden voor de bisschop van dit bisdom.", de: "Lasset uns auch beten für den Bischof dieser Diözese." , es: "Oremos también por el Obispo de esta diócesis."},
      { type: "r", la: "Stet et pascat in fortitúdine tua, Dómine, in sublimitáte nóminis tui.", en: "May he stand firm and shepherd in your strength, O Lord, in the majesty of your name.", nl: "Moge hij standhouden en weiden in uw kracht, Heer, in de verhevenheid van uw naam.", de: "Er stehe fest und weide in deiner Kraft, Herr, in der Erhabenheit deines Namens." , es: "Que se mantenga firme y que ejerza su ministerio de pastor con tu fortaleza, en la sublimidad de tu nombre."},

      { type: "v", la: "Orémus pro unitáte apostolátus.", en: "Let us pray for the unity of the apostolate.", nl: "Laten wij bidden voor de eenheid van het apostolaat.", de: "Lasset uns beten für die Einheit des Apostolats." , es: "Oremos por la unidad del apostolado."},
      { type: "r", la: "Ut omnes unum sint, sicut tu Pater in me et ego in te: ut sint unum, sicut et nos unum sumus.", en: "That all may be one, as you, Father, are in me and I in you; that they may be one, as we also are one.", nl: "Dat allen één mogen zijn, zoals Gij, Vader, in Mij en Ik in U; dat zij één mogen zijn, zoals ook wij één zijn.", de: "Dass alle eins seien, wie du, Vater, in mir und ich in dir; dass sie eins seien, wie auch wir eins sind." , es: "Que todos sean uno, como tú, Padre, en mí y yo en Ti; que sean uno, como también nosotros somos uno."},

      { type: "v", la: "Omne regnum divísum contra se, desolábitur.", en: "Every kingdom divided against itself will be laid waste.", nl: "Elk rijk dat tegen zichzelf verdeeld is, zal ten onder gaan.", de: "Jedes Reich, das in sich uneins ist, wird verwüstet werden." , es: "Todo reino dividido contra sí mismo, será desolado."},
      { type: "r", la: "Et omnis cívitas vel domus divísa contra se non stabit.", en: "And every city or house divided against itself will not stand.", nl: "En elke stad of elk huis dat tegen zichzelf verdeeld is, zal geen stand houden.", de: "Und jede Stadt oder jedes Haus, das in sich uneins ist, wird keinen Bestand haben." , es: "Y toda ciudad o casa dividida contra sí no permanecerá en pie."},

      { type: "v", la: "Orémus pro benefactóribus nostris.", en: "Let us pray for our benefactors.", nl: "Laten wij bidden voor onze weldoeners.", de: "Lasset uns beten für unsere Wohltäter." , es: "Oremos por nuestros benefactores."},
      { type: "r", la: "Retribúere dignáre, Dómine, ómnibus nobis bona faciéntibus propter nomen tuum, vitam ætérnam. Amen.", en: "Vouchsafe, O Lord, to reward with eternal life all those who do us good for your name's sake. Amen.", nl: "Waardig U, Heer, met het eeuwig leven te belonen allen die ons goeddoen omwille van uw naam. Amen.", de: "Geruhe, Herr, allen, die uns Gutes tun um deines Namens willen, mit dem ewigen Leben zu vergelten. Amen." , es: "Dígnate, Señor, a recompensar con la vida eterna a todos los que nos hacen el bien por tu nombre. Amén."},

      { type: "v", la: "Orémus pro Patre.", en: "Let us pray for the Father.", nl: "Laten wij bidden voor de Vader.", de: "Lasset uns beten für den Vater." , es: "Oremos por el Padre."},
      { type: "r", la: "Misericórdia Dómini ab ætérno et usque in ætérnum super eum: custódit enim Dóminus omnes diligéntes se.", en: "The mercy of the Lord is from everlasting to everlasting upon him, for the Lord keeps all those who love him.", nl: "De barmhartigheid van de Heer is van eeuwigheid tot eeuwigheid over hem, want de Heer bewaart allen die Hem liefhebben.", de: "Die Barmherzigkeit des Herrn ist von Ewigkeit zu Ewigkeit über ihm, denn der Herr behütet alle, die ihn lieben." , es: "Que la misericordia del Señor repose sobre él desde siempre y para siempre, pues el Señor custodia a todos los que le aman."},

      { type: "v", la: "Orémus et pro frátribus nostris Óperis Dei, vivis atque defúnctis.", en: "Let us pray also for our brothers and sisters of Opus Dei, living and dead.", nl: "Laten wij ook bidden voor onze broeders en zusters van het Opus Dei, levenden en overledenen.", de: "Lasset uns auch beten für unsere Brüder und Schwestern des Opus Dei, die Lebenden und die Verstorbenen." , es: "Oremos también por nuestros hermanos del Opus Dei, vivos y difuntos."},
      { type: "r", la: "Salvos fac servos tuos, Deus meus, sperántes in te.", en: "Save your servants, my God, who hope in you.", nl: "Red uw dienaren, mijn God, die op U hopen.", de: "Rette deine Diener, mein Gott, die auf dich hoffen." , es: "Salva a tus siervos, Dios mío, que esperan en ti."},

      { type: "v", la: "Mitte eis, Dómine, auxílium de sancto.", en: "Send them help, O Lord, from your holy place.", nl: "Zend hun, Heer, hulp uit uw heiligdom.", de: "Sende ihnen, Herr, Hilfe aus dem Heiligtum." , es: "Envíales, Señor, tu auxilio desde el cielo."},
      { type: "r", la: "Et de Sion tuére eos.", en: "And defend them out of Sion.", nl: "En bescherm hen vanuit Sion.", de: "Und beschütze sie von Sion aus." , es: "Y protégelos desde Sión."},

      { type: "v", la: "Réquiem ætérnam dona eis, Dómine.", en: "Eternal rest grant unto them, O Lord.", nl: "Heer, geef hun de eeuwige rust.", de: "Herr, gib ihnen die ewige Ruhe." , es: "Concédeles, Señor, el descanso eterno."},
      { type: "r", la: "Et lux perpétua lúceat eis.", en: "And let perpetual light shine upon them.", nl: "En het eeuwig licht verlichte hen.", de: "Und das ewige Licht leuchte ihnen." , es: "Y brille sobre ellos la luz perpetua."},

      { type: "v", la: "Requiéscant in pace.", en: "May they rest in peace.", nl: "Dat zij rusten in vrede.", de: "Sie mögen ruhen in Frieden." , es: "Descansen en paz."},
      { type: "r", la: "Amen.", en: "Amen.", nl: "Amen.", de: "Amen." },

      { type: "v", la: "Dómine, exáudi oratiónem meam.", en: "O Lord, hear my prayer.", nl: "Heer, verhoor mijn gebed.", de: "Herr, erhöre mein Gebet." , es: "Señor, escucha mi oración."},
      { type: "r", la: "Et clamor meus ad te véniat.", en: "And let my cry come unto you.", nl: "En laat mijn geroep tot U komen.", de: "Und lass mein Rufen zu dir kommen." , es: "Y llegue a ti mi clamor."},

      { type: "rubric", la: "Sacérdos, si Preces modorátur, exsúrgit et áddit, stans étiam dum recítat oratiónem:", en: "If a priest leads the Preces, he stands and adds the following, remaining standing while reciting the prayer:", nl: "Als een priester de Preces leidt, staat hij op en voegt het volgende toe, terwijl hij ook tijdens het gebed blijft staan:", de: "Wenn ein Priester die Preces leitet, steht er auf und fügt Folgendes hinzu, wobei er auch während des Gebets stehen bleibt:" },

      { type: "v", la: "Dóminus vobíscum.", en: "The Lord be with you.", nl: "De Heer zij met u.", de: "Der Herr sei mit euch." , es: "El Señor esté con vosotros."},
      { type: "r", la: "Et cum spíritu tuo.", en: "And with your spirit.", nl: "En met uw geest.", de: "Und mit deinem Geiste." , es: "Y con tu espíritu."},

      { type: "plain", la: "Orémus. Deus, cui próprium est miseréri semper et párcere: súscipe deprecatiónem nostram. Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut tibi casto córpore serviámus, et mundo corde placeámus.", en: "Let us pray. O God, to whom it belongs always to have mercy and to spare: receive our supplication. Set on fire, O Lord, our inmost being and our heart with the fire of the Holy Spirit, that we may serve you with a chaste body and please you with a clean heart.", nl: "Laat ons bidden. God, aan wie het eigen is altijd barmhartig te zijn en te vergeven: aanvaard onze smeekbede. Ontsteek, Heer, ons binnenste en ons hart met het vuur van de Heilige Geest, opdat wij U dienen met een kuis lichaam en U behagen met een zuiver hart.", de: "Lasset uns beten. O Gott, dem es eigen ist, immer barmherzig zu sein und zu verschonen: nimm unser Flehen an. Entzünde, Herr, unser Inneres und unser Herz mit dem Feuer des Heiligen Geistes, damit wir dir mit reinem Leib dienen und dir mit lauterem Herzen gefallen." , es: "Oh Dios, de quien es propio compadecerse siempre y perdonar: acoge nuestra súplica. Enciende, Señor, nuestras entrañas y nuestro corazón con el fuego del Espíritu Santo: para que te sirvamos con un comportamiento casto y te agrademos por nuestro corazón limpio."},

      { type: "plain", la: "Actiónes nostras, quǽsumus Dómine, aspirándo prǽveni et adiuvándo proséquere: ut cuncta nostra orátio et operátio a te semper incípiat, et per te cœpta finiátur. Per Christum Dóminum nostrum.", en: "Direct, we beseech you, O Lord, our actions by your inspiration, and further them by your continual help, that every prayer and work of ours may always begin from you, and through you be happily ended. Through Christ our Lord.", nl: "Ga onze daden vooraf met uw ingeving, Heer, en vergezel ze met uw hulp: opdat al ons bidden en werken altijd van U moge uitgaan en door U tot voltooiing moge komen. Door Christus onze Heer.", de: "Sei du, o Herr, unseren Taten mit deiner Eingebung zuvorkommend und begleite sie mit deiner Hilfe, damit all unser Beten und Wirken immer von dir seinen Anfang nehme und durch dich vollendet werde. Durch Christus, unseren Herrn." , es: "Te pedimos, Señor, que te anticipas a nuestras acciones inspirándolas y que las acompañes sosteniéndolas: para que toda nuestra oración y actuación empiece en ti y por ti llegue a cumplimiento lo iniciado. Por Cristo nuestro Señor."},
      { type: "r", la: "Amen.", en: "Amen.", nl: "Amen.", de: "Amen." },

      { type: "rubric", la: "Omnes dicunt:", en: "All say:", nl: "Allen zeggen:", de: "Alle sagen:" },
      { type: "plain", la: "Gáudium cum pace, emendatiónem vitæ, spátium veræ pœniténtiæ, grátiam et consolatiónem Sancti Spíritus atque in Ópere Dei perseverántiam, tríbuat nobis Omnípotens et Miséricors Dóminus.", en: "May the Almighty and Merciful Lord grant us joy with peace, amendment of life, room for true penance, the grace and consolation of the Holy Spirit, and perseverance in Opus Dei.", nl: "Moge de Almachtige en Barmhartige Heer ons vreugde met vrede schenken, verbetering van leven, ruimte voor ware boetvaardigheid, de genade en troost van de Heilige Geest, en volharding in het Opus Dei.", de: "Der allmächtige und barmherzige Herr schenke uns Freude mit Frieden, Besserung des Lebens, Raum für wahre Buße, die Gnade und den Trost des Heiligen Geistes und das Beharren im Opus Dei." , es: "Que el Señor omnipotente y misericordioso nos conceda la alegría y la paz, la conversión de nuestra vida, un tiempo de verdadera penitencia, la gracia y el consuelo del Espíritu Santo y la perseverancia en el Opus Dei."},

      { type: "v", la: "Sancte Míchaël.", en: "Saint Michael.", nl: "Heilige Michaël.", de: "Heiliger Michael." , es: "San Miguel."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},
      { type: "v", la: "Sancte Gábriel.", en: "Saint Gabriel.", nl: "Heilige Gabriël.", de: "Heiliger Gabriel." , es: "San Gabriel."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},
      { type: "v", la: "Sancte Ráphaël.", en: "Saint Raphael.", nl: "Heilige Rafaël.", de: "Heiliger Raphael." , es: "San Rafael."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},
      { type: "v", la: "Sancte Petre.", en: "Saint Peter.", nl: "Heilige Petrus.", de: "Heiliger Petrus." , es: "San Pedro."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},
      { type: "v", la: "Sancte Paule.", en: "Saint Paul.", nl: "Heilige Paulus.", de: "Heiliger Paulus." , es: "San Pablo."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},
      { type: "v", la: "Sancte Ioánnes.", en: "Saint John.", nl: "Heilige Johannes.", de: "Heiliger Johannes." , es: "San Juan."},
      { type: "r", la: "Ora pro nobis.", en: "Pray for us.", nl: "Bid voor ons.", de: "Bitte für uns." , es: "Ruega por nosotros."},

      { type: "rubric", la: "Cum adsit áliquis Sacérdos, dígnior ait:", en: "When a priest is present, the one presiding says:", nl: "Wanneer een priester aanwezig is, zegt degene die voorgaat:", de: "Wenn ein Priester anwesend ist, sagt der Leiter:" },
      { type: "plain", la: "Iube, Domne, benedícere.", en: "Father, give the blessing.", nl: "Vader, geef ons uw zegen.", de: "Vater, spende uns den Segen." , es: "Dígnate, padre, bendicirnos."},

      { type: "rubric", la: "Sacérdos benedícit:", en: "The priest blesses:", nl: "De priester zegent:", de: "Der Priester segnet:" },
      { type: "plain", la: "Dóminus sit in córdibus vestris, et in lábiis vestris, in nómine Patris † et Fílii et Spíritus Sancti.", en: "May the Lord be in your hearts and on your lips, in the name of the Father † and of the Son and of the Holy Spirit.", nl: "Moge de Heer in uw harten en op uw lippen zijn, in de naam van de Vader † en de Zoon en de Heilige Geest.", de: "Der Herr sei in euren Herzen und auf euren Lippen, im Namen des Vaters † und des Sohnes und des Heiligen Geistes." , es: "Que el Señor esté en vuestros corazones y en vuestros labios, en el nombre del Padre † y del Hijo y del Espíritu Santo."},
      { type: "r", la: "Amen.", en: "Amen.", nl: "Amen.", de: "Amen." },

      { type: "v", la: "Pax.", en: "Peace.", nl: "Vrede.", de: "Friede." , es: "Paz."},
      { type: "r", la: "In ætérnum.", en: "Forever.", nl: "In eeuwigheid.", de: "In Ewigkeit." , es: "Para siempre."}
    ]
  },
  {
    id: "opusdei-begin",
    category: "opusdei",
    title: { en: "To Begin Prayer", nl: "Om het Gebed te Beginnen", de: "Zum Beginn des Gebets" },
    text: {
      en: "My Lord and my God, I firmly believe that you are here, that you see me, that you hear me. I adore you with profound reverence. I ask your pardon for my sins, and grace to make this time of prayer fruitful. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Mijn Heer en mijn God, ik geloof vast dat U hier aanwezig bent, dat U mij ziet, dat U mij hoort. Ik aanbid U met diepe eerbied. Ik vraag U vergiffenis voor mijn zonden, en genade om deze tijd van gebed met vrucht te volbrengen. Maria, mijn Onbevlekte Moeder, Heilige Jozef, mijn Vader en Heer, mijn Engel Bewaarder, bid voor mij.",
      de: "Mein Herr und mein Gott, ich glaube fest, dass du hier bist, dass du mich siehst, dass du mich hörst. Ich bete dich an mit tiefer Ehrfurcht. Ich bitte dich um Verzeihung für meine Sünden und um die Gnade, diese Gebetszeit fruchtbar zu machen. Meine Unbefleckte Mutter, heiliger Josef, mein Vater und Herr, mein Schutzengel: tretet für mich ein."
    }
  },
  {
    id: "opusdei-end",
    category: "opusdei",
    title: { en: "To End Prayer", nl: "Om het Gebed te Besluiten", de: "Zum Abschluss des Gebets" },
    text: {
      en: "I thank you, my God, for the good resolutions, affections, and inspirations you have communicated to me in this meditation. I ask your help to put them into effect. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Ik dank U, mijn God, voor de goede voornemens, gevoelens en ingevingen, die U mij in deze overweging heeft gegeven. Ik vraag U hulp om ze te verwezenlijken. Maria, mijn Onbevlekte Moeder, Heilige Jozef, mijn Vader en Heer, mijn Engel Bewaarder, bid voor mij.",
      de: "Ich danke dir, mein Gott, für die guten Vorsätze, Gefühle und Eingebungen, die du mir in dieser Betrachtung geschenkt hast. Ich bitte um deine Hilfe, sie in die Tat umzusetzen. Meine Unbefleckte Mutter, heiliger Josef, mein Vater und Herr, mein Schutzengel: tretet für mich ein."
    }
  }
];

/* ============================================================
   ROSARY / ROZENKRANS / ROSENKRANZ / ROSARIUM
   ============================================================ */

const ROSARY_STEPS = [
  { ref: "signum-crucis", label: { en: "On the Crucifix", nl: "Op het kruisje", de: "Am Kreuz", la: "Ad crucifixum" } },
  { ref: "credo", label: { en: "On the Crucifix", nl: "Op het kruisje", de: "Am Kreuz", la: "Ad crucifixum" } },
  { ref: "pater-noster", label: { en: "First large bead", nl: "Eerste grote kraal", de: "Erste große Perle", la: "Prima grana maior" } },
  { ref: "ave-maria", label: { en: "Three small beads — for Faith, Hope and Charity", nl: "Drie kleine kralen — voor Geloof, Hoop en Liefde", de: "Drei kleine Perlen — für Glaube, Hoffnung und Liebe", la: "Tres granulae — pro Fide, Spe et Caritate" }, repeat: 3 },
  { ref: "gloria-patri", label: { en: "Before each decade / mystery", nl: "Voor elk tientje / geheim", de: "Vor jedem Gesätz / Geheimnis", la: "Ante quodque decadem" } }
];

const DECADE_PATTERN = [
  { ref: "pater-noster", label: { en: "1 Our Father", nl: "1 Onze Vader", de: "1 Vaterunser", la: "1 Pater Noster" } },
  { ref: "ave-maria", label: { en: "10 Hail Marys", nl: "10 Weesgegroetjes", de: "10 Ave Maria", la: "10 Ave Maria" } },
  { ref: "gloria-patri", label: { en: "1 Glory Be", nl: "1 Eer aan de Vader", de: "1 Ehre sei dem Vater", la: "1 Gloria Patri" } },
  { ref: "fatima", label: { en: "Fatima Prayer", nl: "Fátima-gebed", de: "Fátima-Gebet", la: "Oratio Fatimae" } }
];

const MYSTERIES = {
  joyful: {
    days: [1, 6], // Monday, Saturday
    name: { en: "Joyful Mysteries", nl: "Blijde Geheimen", de: "Freudenreiche Geheimnisse", es: "Misterios Gozosos", la: "Mysteria Gaudiosa" },
    items: [
      { en: "The Annunciation", nl: "De aankondiging van de engel aan Maria", de: "Die Verkündigung des Herrn", es: "La Anunciación", la: "Annuntiatio" },
      { en: "The Visitation", nl: "Het bezoek van Maria aan Elisabeth", de: "Die Heimsuchung Mariens", es: "La Visitación", la: "Visitatio" },
      { en: "The Nativity", nl: "De geboorte van Jezus", de: "Die Geburt Jesu", es: "La Natividad", la: "Nativitas" },
      { en: "The Presentation in the Temple", nl: "De opdracht van Jezus in de tempel", de: "Die Darstellung Jesu im Tempel", es: "La Presentación en el Templo", la: "Praesentatio" },
      { en: "The Finding in the Temple", nl: "Het terugvinden van Jezus in de tempel", de: "Das Wiederfinden Jesu im Tempel", es: "El Hallazgo en el Templo", la: "Inventio in Templo" }
    ]
  },
  sorrowful: {
    days: [2, 5], // Tuesday, Friday
    name: { en: "Sorrowful Mysteries", nl: "Droevige Geheimen", de: "Schmerzhafte Geheimnisse", es: "Misterios Dolorosos", la: "Mysteria Dolorosa" },
    items: [
      { en: "The Agony in the Garden", nl: "De doodsangst van Jezus in de Hof van Olijven", de: "Die Todesangst Jesu am Ölberg", es: "La Agonía en el Huerto", la: "Agonia in Horto" },
      { en: "The Scourging at the Pillar", nl: "De geseling", de: "Die Geißelung Jesu", es: "La Flagelación", la: "Flagellatio" },
      { en: "The Crowning with Thorns", nl: "De doornenkroning", de: "Die Dornenkrönung Jesu", es: "La Coronación de Espinas", la: "Coronatio Spinis" },
      { en: "The Carrying of the Cross", nl: "De kruisdraging", de: "Die Kreuztragung Jesu", es: "El Camino del Calvario", la: "Baiulatio Crucis" },
      { en: "The Crucifixion and Death", nl: "De kruisiging en dood van Jezus", de: "Die Kreuzigung und der Tod Jesu", es: "La Crucifixión y Muerte", la: "Crucifixio" }
    ]
  },
  glorious: {
    days: [0, 3], // Sunday, Wednesday
    name: { en: "Glorious Mysteries", nl: "Glorievolle Geheimen", de: "Glorreiche Geheimnisse", es: "Misterios Gloriosos", la: "Mysteria Gloriosa" },
    items: [
      { en: "The Resurrection", nl: "De verrijzenis van Jezus", de: "Die Auferstehung Jesu", es: "La Resurrección", la: "Resurrectio" },
      { en: "The Ascension", nl: "De hemelvaart van Jezus", de: "Die Himmelfahrt Jesu", es: "La Ascensión", la: "Ascensio" },
      { en: "The Descent of the Holy Spirit", nl: "De nederdaling van de Heilige Geest", de: "Die Herabkunft des Heiligen Geistes", es: "La Venida del Espíritu Santo", la: "Descensus Spiritus Sancti" },
      { en: "The Assumption of Mary", nl: "De tenhemelopneming van Maria", de: "Die Aufnahme Mariens in den Himmel", es: "La Asunción de María", la: "Assumptio Mariae" },
      { en: "The Coronation of Mary", nl: "De kroning van Maria in de hemel", de: "Die Krönung Mariens", es: "La Coronación de María", la: "Coronatio Mariae" }
    ]
  },
  luminous: {
    days: [4], // Thursday
    name: { en: "Luminous Mysteries", nl: "Lichtende Geheimen", de: "Lichtreiche Geheimnisse", es: "Misterios Luminosos", la: "Mysteria Luminosa" },
    items: [
      { en: "The Baptism in the Jordan", nl: "De doop van Jezus in de Jordaan", de: "Die Taufe Jesu im Jordan", es: "El Bautismo en el Jordán", la: "Baptismus in Iordane" },
      { en: "The Wedding at Cana", nl: "De bruiloft van Kana", de: "Die Selbstoffenbarung bei der Hochzeit zu Kana", es: "Las Bodas de Caná", la: "Nuptiae in Cana" },
      { en: "The Proclamation of the Kingdom", nl: "De verkondiging van het Rijk Gods", de: "Die Verkündigung des Reiches Gottes", es: "La Proclamación del Reino", la: "Proclamatio Regni" },
      { en: "The Transfiguration", nl: "De gedaanteverandering op de berg Tabor", de: "Die Verklärung Jesu", es: "La Transfiguración", la: "Transfiguratio" },
      { en: "The Institution of the Eucharist", nl: "De instelling van de Eucharistie", de: "Die Einsetzung der Eucharistie", es: "La Institución de la Eucaristía", la: "Institutio Eucharistiae" }
    ]
  }
};

const CLOSING_REF = "salve-regina";
