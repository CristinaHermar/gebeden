/* ============================================================
   PRECES — datos de oraciones (EN / NL / DE / LA)
   Fuentes: textos tradicionales católicos (dominio público) y,
   para las dos últimas oraciones del Opus Dei, opusdei.org
   (traducción propia al neerlandés, al alemán y al latín).
   ============================================================ */

const PRAYERS = [
  {
    id: "signum-crucis",
    category: "daily",
    title: { en: "Sign of the Cross", nl: "Kruisteken", de: "Kreuzzeichen", la: "Signum Crucis" },
    text: {
      en: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      nl: "In de naam van de Vader, en de Zoon, en de Heilige Geest. Amen.",
      de: "Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.",
      la: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen."
    }
  },
  {
    id: "credo",
    category: "daily",
    title: { en: "Apostles' Creed", nl: "Apostolische Geloofsbelijdenis", de: "Apostolisches Glaubensbekenntnis", la: "Symbolum Apostolorum" },
    text: {
      en: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
      nl: "Ik geloof in God, de almachtige Vader, Schepper van hemel en aarde. En in Jezus Christus, zijn enige Zoon, onze Heer, die ontvangen is van de Heilige Geest, geboren uit de maagd Maria; die geleden heeft onder Pontius Pilatus, is gekruisigd, gestorven en begraven; die nedergedaald is ter helle, de derde dag verrezen uit de doden; die opgevaren is ten hemel en zit aan de rechterhand van God, zijn almachtige Vader; vandaar zal Hij komen oordelen de levenden en de doden. Ik geloof in de Heilige Geest, de heilige katholieke Kerk, de gemeenschap van de heiligen, de vergiffenis van de zonden, de verrijzenis van het lichaam, en het eeuwig leven. Amen.",
      de: "Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, und an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn, empfangen durch den Heiligen Geist, geboren von der Jungfrau Maria, gelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben, hinabgestiegen in das Reich des Todes, am dritten Tage auferstanden von den Toten, aufgefahren in den Himmel; er sitzt zur Rechten Gottes, des allmächtigen Vaters; von dort wird er kommen, zu richten die Lebenden und die Toten. Ich glaube an den Heiligen Geist, die heilige katholische Kirche, Gemeinschaft der Heiligen, Vergebung der Sünden, Auferstehung der Toten und das ewige Leben. Amen.",
      la: "Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum: qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen."
    }
  },
  {
    id: "pater-noster",
    category: "daily",
    title: { en: "Our Father", nl: "Onze Vader", de: "Vaterunser", la: "Pater Noster" },
    text: {
      en: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      nl: "Onze Vader, die in de hemel zijt, uw naam worde geheiligd, uw rijk kome, uw wil geschiede op aarde zoals in de hemel. Geef ons heden ons dagelijks brood en vergeef ons onze schulden, zoals ook wij vergeven aan onze schuldenaren, en breng ons niet in beproeving, maar verlos ons van het kwade. Amen.",
      de: "Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unsern Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Amen.",
      la: "Pater noster, qui es in cælis: sanctificétur nomen tuum; advéniat regnum tuum; fiat volúntas tua, sicut in cælo, et in terra. Panem nostrum cotidiánum da nobis hódie; et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris; et ne nos indúcas in tentatiónem; sed líbera nos a malo. Amen."
    }
  },
  {
    id: "ave-maria",
    category: "daily",
    title: { en: "Hail Mary", nl: "Wees Gegroet", de: "Gegrüßet seist du, Maria", la: "Ave Maria" },
    text: {
      en: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      nl: "Wees gegroet, Maria, vol van genade, de Heer is met u. Gij zijt de gezegende onder de vrouwen en gezegend is Jezus, de vrucht van uw schoot. Heilige Maria, Moeder van God, bid voor ons, zondaars, nu en in het uur van onze dood. Amen.",
      de: "Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus. Heilige Maria, Mutter Gottes, bitte für uns Sünder, jetzt und in der Stunde unseres Todes. Amen.",
      la: "Ave María, grátia plena, Dóminus tecum. Benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen."
    }
  },
  {
    id: "gloria-patri",
    category: "daily",
    title: { en: "Glory Be", nl: "Eer aan de Vader", de: "Ehre sei dem Vater", la: "Gloria Patri" },
    text: {
      en: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
      nl: "Eer aan de Vader, en de Zoon, en de Heilige Geest. Zoals het was in het begin, en nu, en altijd, tot in de eeuwen der eeuwen. Amen.",
      de: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, wie im Anfang, so auch jetzt und alle Zeit und in Ewigkeit. Amen.",
      la: "Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen."
    }
  },
  {
    id: "fatima",
    category: "daily",
    title: { en: "O My Jesus (Fatima Prayer)", nl: "O mijn Jezus (Fátima-gebed)", de: "O mein Jesus (Fátima-Gebet)" },
    text: {
      en: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of thy mercy. Amen.",
      nl: "O mijn Jezus, vergeef ons onze zonden, behoed ons voor het vuur van de hel, breng alle zielen naar de Hemel, vooral diegenen die uw barmhartigheid het meeste nodig hebben. Amen.",
      de: "O mein Jesus, verzeih uns unsere Sünden, bewahre uns vor dem Feuer der Hölle, führe alle Seelen in den Himmel, besonders jene, die deiner Barmherzigkeit am meisten bedürfen. Amen."
    }
  },
  {
    id: "salve-regina",
    category: "daily",
    title: { en: "Hail, Holy Queen", nl: "Wees Gegroet, Koningin", de: "Sei gegrüßt, o Königin", la: "Salve Regina" },
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
    title: { en: "Come, Holy Spirit", nl: "Kom, Heilige Geest", de: "Komm, Heiliger Geist", la: "Veni, Sancte Spíritus" },
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
    },
    
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
    },
    
  },
  {
    id: "opusdei-preces",
    category: "opusdei",
    title: { en: "Preces", nl: "Preces", de: "Preces", la: "Preces" },
    text: {
      en: "I will serve! Serviam!<br><br>V. To the Most Blessed Trinity.<br>R. Thanks be to you, O God, thanks be to you: true and one Trinity, one and supreme Godhead, holy and one Unity.<br><br>V. To Jesus Christ the King.<br>R. The Lord is our judge; the Lord is our lawgiver; the Lord is our King. He himself will save us.<br><br>V. Christ, Son of the living God, have mercy on us.<br>R. Christ, Son of the living God, have mercy on us.<br><br>V. Arise, O Christ, and help us.<br>R. And deliver us for your name's sake.<br><br>V. The Lord is my light and my salvation; whom shall I fear?<br>R. Though an army encamp against me, my heart shall not fear; though war should rise against me, in this I will be confident.<br><br>V. To the Blessed Virgin Mary, Mediatrix.<br>R. Remember, O Virgin Mother of God, as you stand in the presence of the Lord, to speak good things on our behalf.<br><br>V. To Saint Joseph, Spouse of the Blessed Virgin Mary.<br>R. God made you as it were the father of the King, and lord of his whole household: pray for us.<br><br>V. To the Guardian Angels.<br>R. Holy Guardian Angels of ours, defend us in battle, that we may not perish in the fearful judgment.<br><br>V. To Saint Josemaría, our Founder.<br>R. Intercede for your children, that, faithful to the spirit of Opus Dei, we may sanctify our work and seek to win souls for Christ.<br><br>V. Let us pray for our Most Holy Father, Pope N.<br>R. May the Lord preserve him, and give him life, and make him blessed upon the earth, and not deliver him into the hands of his enemies.<br><br>V. Let us pray also for the Bishop of this diocese.<br>R. May he stand firm and shepherd in your strength, O Lord, in the majesty of your name.<br><br>V. Let us pray for the unity of the apostolate.<br>R. That all may be one, as you, Father, are in me and I in you; that they may be one, as we also are one.<br><br>V. Every kingdom divided against itself will be laid waste.<br>R. And every city or house divided against itself will not stand.<br><br>V. Let us pray for our benefactors.<br>R. Vouchsafe, O Lord, to reward with eternal life all those who do us good for your name's sake. Amen.<br><br>V. Let us pray for the Father.<br>R. The mercy of the Lord is from everlasting to everlasting upon him, for the Lord keeps all those who love him.<br><br>V. Let us pray also for our brothers and sisters of Opus Dei, living and dead.<br>R. Save your servants, my God, who hope in you.<br><br>V. Send them help, O Lord, from your holy place.<br>R. And defend them out of Sion.<br><br>V. Eternal rest grant unto them, O Lord.<br>R. And let perpetual light shine upon them.<br><br>V. May they rest in peace.<br>R. Amen.<br><br>V. O Lord, hear my prayer.<br>R. And let my cry come unto you.",
      nl: "Ik zal dienen! Serviam!<br><br>V. Aan de Allerheiligste Drie-eenheid.<br>R. Dank aan U, o God, dank aan U: ware en ene Drie-eenheid, ene en allerhoogste Godheid, heilige en ene Eenheid.<br><br>V. Aan Jezus Christus, Koning.<br>R. De Heer is onze rechter; de Heer is onze wetgever; de Heer is onze Koning. Hij zal ons redden.<br><br>V. Christus, Zoon van de levende God, ontferm U over ons.<br>R. Christus, Zoon van de levende God, ontferm U over ons.<br><br>V. Sta op, Christus, help ons.<br>R. En bevrijd ons omwille van uw naam.<br><br>V. De Heer is mijn licht en mijn heil, voor wie zou ik vrezen?<br>R. Al legert zich een leger tegen mij, mijn hart zal niet vrezen; al verheft zich een strijd tegen mij, toch zal ik vertrouwen.<br><br>V. Aan de Heilige Maagd Maria, Middelares.<br>R. Gedenk, Maagd en Moeder van God, terwijl u voor het aanschijn van de Heer staat, goede dingen over ons te zeggen.<br><br>V. Aan de heilige Jozef, Bruidegom van de Heilige Maagd Maria.<br>R. God heeft u aangesteld als het ware als vader van de Koning en heer van heel zijn huis: bid voor ons.<br><br>V. Aan de heilige Engelbewaarders.<br>R. Heilige Engelbewaarders, verdedig ons in de strijd, opdat wij niet verloren gaan in het vreselijke oordeel.<br><br>V. Aan de heilige Jozefmaria, onze Stichter.<br>R. Kom tussenbeide voor uw kinderen, opdat wij, trouw aan de geest van het Opus Dei, ons werk heiligen en zielen voor Christus trachten te winnen.<br><br>V. Laten wij bidden voor onze Allerheiligste Vader, Paus N.<br>R. Moge de Heer hem bewaren, hem leven geven, hem gelukkig maken op aarde, en hem niet overleveren aan de macht van zijn vijanden.<br><br>V. Laten wij ook bidden voor de bisschop van dit bisdom.<br>R. Moge hij standhouden en weiden in uw kracht, Heer, in de verhevenheid van uw naam.<br><br>V. Laten wij bidden voor de eenheid van het apostolaat.<br>R. Dat allen één mogen zijn, zoals Gij, Vader, in Mij en Ik in U; dat zij één mogen zijn, zoals ook wij één zijn.<br><br>V. Elk rijk dat tegen zichzelf verdeeld is, zal ten onder gaan.<br>R. En elke stad of elk huis dat tegen zichzelf verdeeld is, zal geen stand houden.<br><br>V. Laten wij bidden voor onze weldoeners.<br>R. Waardig U, Heer, met het eeuwig leven te belonen allen die ons goeddoen omwille van uw naam. Amen.<br><br>V. Laten wij bidden voor de Vader.<br>R. De barmhartigheid van de Heer is van eeuwigheid tot eeuwigheid over hem, want de Heer bewaart allen die Hem liefhebben.<br><br>V. Laten wij ook bidden voor onze broeders en zusters van het Opus Dei, levenden en overledenen.<br>R. Red uw dienaren, mijn God, die op U hopen.<br><br>V. Zend hun, Heer, hulp uit uw heiligdom.<br>R. En bescherm hen vanuit Sion.<br><br>V. Heer, geef hun de eeuwige rust.<br>R. En het eeuwig licht verlichte hen.<br><br>V. Dat zij rusten in vrede.<br>R. Amen.<br><br>V. Heer, verhoor mijn gebed.<br>R. En laat mijn geroep tot U komen.",
      de: "Ich werde dienen! Serviam!<br><br>V. An die Allerheiligste Dreifaltigkeit.<br>R. Dank sei dir, o Gott, Dank sei dir: wahre und eine Dreifaltigkeit, eine und höchste Gottheit, heilige und eine Einheit.<br><br>V. An Jesus Christus, den König.<br>R. Der Herr ist unser Richter; der Herr ist unser Gesetzgeber; der Herr ist unser König. Er selbst wird uns retten.<br><br>V. Christus, Sohn des lebendigen Gottes, erbarme dich unser.<br>R. Christus, Sohn des lebendigen Gottes, erbarme dich unser.<br><br>V. Steh auf, Christus, hilf uns.<br>R. Und befreie uns um deines Namens willen.<br><br>V. Der Herr ist mein Licht und mein Heil: vor wem sollte ich mich fürchten?<br>R. Wenn sich ein Heer gegen mich lagert, fürchtet sich mein Herz nicht; erhebt sich Krieg gegen mich, bleibe ich dennoch voll Zuversicht.<br><br>V. An die Heilige Jungfrau Maria, Mittlerin.<br>R. Gedenke, Jungfrau und Mutter Gottes, während du vor dem Angesicht des Herrn stehst, Gutes für uns zu sprechen.<br><br>V. An den heiligen Josef, Bräutigam der seligen Jungfrau Maria.<br>R. Gott hat dich gleichsam zum Vater des Königs gemacht und zum Herrn seines ganzen Hauses: bitte für uns.<br><br>V. An die heiligen Schutzengel.<br>R. Heilige Schutzengel, verteidigt uns im Kampf, damit wir nicht im schrecklichen Gericht zugrunde gehen.<br><br>V. An den heiligen Josefmaria, unseren Gründer.<br>R. Tritt ein für deine Kinder, damit wir, treu dem Geist des Opus Dei, die Arbeit heiligen und Seelen für Christus zu gewinnen suchen.<br><br>V. Lasset uns beten für unseren Heiligen Vater, Papst N.<br>R. Der Herr bewahre ihn, gebe ihm Leben, mache ihn glücklich auf Erden und liefere ihn nicht der Macht seiner Feinde aus.<br><br>V. Lasset uns auch beten für den Bischof dieser Diözese.<br>R. Er stehe fest und weide in deiner Kraft, Herr, in der Erhabenheit deines Namens.<br><br>V. Lasset uns beten für die Einheit des Apostolats.<br>R. Dass alle eins seien, wie du, Vater, in mir und ich in dir; dass sie eins seien, wie auch wir eins sind.<br><br>V. Jedes Reich, das in sich uneins ist, wird verwüstet werden.<br>R. Und jede Stadt oder jedes Haus, das in sich uneins ist, wird keinen Bestand haben.<br><br>V. Lasset uns beten für unsere Wohltäter.<br>R. Geruhe, Herr, allen, die uns Gutes tun um deines Namens willen, mit dem ewigen Leben zu vergelten. Amen.<br><br>V. Lasset uns beten für den Vater.<br>R. Die Barmherzigkeit des Herrn ist von Ewigkeit zu Ewigkeit über ihm, denn der Herr behütet alle, die ihn lieben.<br><br>V. Lasset uns auch beten für unsere Brüder und Schwestern des Opus Dei, die Lebenden und die Verstorbenen.<br>R. Rette deine Diener, mein Gott, die auf dich hoffen.<br><br>V. Sende ihnen, Herr, Hilfe aus dem Heiligtum.<br>R. Und beschütze sie von Sion aus.<br><br>V. Herr, gib ihnen die ewige Ruhe.<br>R. Und das ewige Licht leuchte ihnen.<br><br>V. Sie mögen ruhen in Frieden.<br>R. Amen.<br><br>V. Herr, erhöre mein Gebet.<br>R. Und lass mein Rufen zu dir kommen.",
      la: "Sérviam!<br><br>V. Ad Trinitátem Beatíssimam.<br>R. Grátias tibi, Deus, grátias tibi: vera et una Trínitas, una et summa Déitas, sancta et una Únitas.<br><br>V. Ad Iesum Christum Regem.<br>R. Dóminus Iudex noster; Dóminus Légifer noster; Dóminus Rex noster. Ipse salvábit nos.<br><br>V. Christe, Fili Dei vivi, miserére nobis.<br>R. Christe, Fili Dei vivi, miserére nobis.<br><br>V. Exsúrge, Christe, ádiuva nos.<br>R. Et líbera nos propter nomen tuum.<br><br>V. Dóminus illuminátio mea et salus mea: quem timébo?<br>R. Si consístant advérsum me castra, non timébit cor meum; si exsúrgat advérsum me prœlium, in hoc ego sperábo.<br><br>V. Ad Beátam Vírginem Maríam Mediatrícem.<br>R. Recordáre, Virgo Mater Dei, dum stéteris in conspéctu Dómini, ut loquáris pro nobis bona.<br><br>V. Ad Sanctum Ioseph Sponsum Beátæ Maríæ Vírginis.<br>R. Fecit te Deus quasi Patrem Regis, et dóminum univérsæ domus eius: ora pro nobis.<br><br>V. Ad Ángelos Custódes.<br>R. Sancti Ángeli Custódes nostri, deféndite nos in prœlio ut non pereámus in treméndo iudício.<br><br>V. Ad Sanctum Iosephmaríam Conditórem nostrum.<br>R. Intercéde pro fíliis tuis ut, fidéles spirítui Óperis Dei, labórem sanctificémus et ánimas Christo lucrifácere quærámus.<br><br>V. Orémus pro Beatíssimo Papa nostro N.<br>R. Dóminus consérvet eum, et vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in ánimam inimicórum eius.<br><br>V. Orémus et pro Antístite huius diœcésis.<br>R. Stet et pascat in fortitúdine tua, Dómine, in sublimitáte nóminis tui.<br><br>V. Orémus pro unitáte apostolátus.<br>R. Ut omnes unum sint, sicut tu Pater in me et ego in te: ut sint unum, sicut et nos unum sumus.<br><br>V. Omne regnum divísum contra se, desolábitur.<br>R. Et omnis cívitas vel domus divísa contra se non stabit.<br><br>V. Orémus pro benefactóribus nostris.<br>R. Retribúere dignáre, Dómine, ómnibus nobis bona faciéntibus propter nomen tuum, vitam ætérnam. Amen.<br><br>V. Orémus pro Patre.<br>R. Misericórdia Dómini ab ætérno et usque in ætérnum super eum: custódit enim Dóminus omnes diligéntes se.<br><br>V. Orémus et pro frátribus nostris Óperis Dei, vivis atque defúnctis.<br>R. Salvos fac servos tuos, Deus meus, sperántes in te.<br><br>V. Mitte eis, Dómine, auxílium de sancto.<br>R. Et de Sion tuére eos.<br><br>V. Réquiem ætérnam dona eis, Dómine.<br>R. Et lux perpétua lúceat eis.<br><br>V. Requiéscant in pace.<br>R. Amen.<br><br>V. Dómine, exáudi oratiónem meam.<br>R. Et clamor meus ad te véniat."
    },
    note: {
      en: "<em>If a priest leads the Preces, he stands and adds the following, remaining standing while reciting the prayer:</em><br><br>V. The Lord be with you.<br>R. And with your spirit.<br><br>Let us pray. O God, to whom it belongs always to have mercy and to spare: receive our supplication. Set on fire, O Lord, our inmost being and our heart with the fire of the Holy Spirit, that we may serve you with a chaste body and please you with a clean heart.<br><br>Direct, we beseech you, O Lord, our actions by your inspiration, and further them by your continual help, that every prayer and work of ours may always begin from you, and through you be happily ended. Through Christ our Lord.<br>R. Amen.<br><br><em>All say:</em> May the Almighty and Merciful Lord grant us joy with peace, amendment of life, room for true penance, the grace and consolation of the Holy Spirit, and perseverance in Opus Dei.<br><br>V. Saint Michael.<br>R. Pray for us.<br>V. Saint Gabriel.<br>R. Pray for us.<br>V. Saint Raphael.<br>R. Pray for us.<br>V. Saint Peter.<br>R. Pray for us.<br>V. Saint Paul.<br>R. Pray for us.<br>V. Saint John.<br>R. Pray for us.<br><br><em>When a priest is present, the one presiding says:</em> Father, give the blessing.<br><em>The priest blesses:</em> May the Lord be in your hearts and on your lips, in the name of the Father † and of the Son and of the Holy Spirit.<br>R. Amen.<br><br>V. Peace.<br>R. Forever.",
      nl: "<em>Als een priester de Preces leidt, staat hij op en voegt het volgende toe, terwijl hij ook tijdens het gebed blijft staan:</em><br><br>V. De Heer zij met u.<br>R. En met uw geest.<br><br>Laat ons bidden. God, aan wie het eigen is altijd barmhartig te zijn en te vergeven: aanvaard onze smeekbede. Ontsteek, Heer, ons binnenste en ons hart met het vuur van de Heilige Geest, opdat wij U dienen met een kuis lichaam en U behagen met een zuiver hart.<br><br>Ga onze daden vooraf met uw ingeving, Heer, en vergezel ze met uw hulp: opdat al ons bidden en werken altijd van U moge uitgaan en door U tot voltooiing moge komen. Door Christus onze Heer.<br>R. Amen.<br><br><em>Allen zeggen:</em> Moge de Almachtige en Barmhartige Heer ons vreugde met vrede schenken, verbetering van leven, ruimte voor ware boetvaardigheid, de genade en troost van de Heilige Geest, en volharding in het Opus Dei.<br><br>V. Heilige Michaël.<br>R. Bid voor ons.<br>V. Heilige Gabriël.<br>R. Bid voor ons.<br>V. Heilige Rafaël.<br>R. Bid voor ons.<br>V. Heilige Petrus.<br>R. Bid voor ons.<br>V. Heilige Paulus.<br>R. Bid voor ons.<br>V. Heilige Johannes.<br>R. Bid voor ons.<br><br><em>Wanneer een priester aanwezig is, zegt degene die voorgaat:</em> Vader, geef ons uw zegen.<br><em>De priester zegent:</em> Moge de Heer in uw harten en op uw lippen zijn, in de naam van de Vader † en de Zoon en de Heilige Geest.<br>R. Amen.<br><br>V. Vrede.<br>R. In eeuwigheid.",
      de: "<em>Wenn ein Priester die Preces leitet, steht er auf und fügt Folgendes hinzu, wobei er auch während des Gebets stehen bleibt:</em><br><br>V. Der Herr sei mit euch.<br>R. Und mit deinem Geiste.<br><br>Lasset uns beten. O Gott, dem es eigen ist, immer barmherzig zu sein und zu verschonen: nimm unser Flehen an. Entzünde, Herr, unser Inneres und unser Herz mit dem Feuer des Heiligen Geistes, damit wir dir mit reinem Leib dienen und dir mit lauterem Herzen gefallen.<br><br>Sei du, o Herr, unseren Taten mit deiner Eingebung zuvorkommend und begleite sie mit deiner Hilfe, damit all unser Beten und Wirken immer von dir seinen Anfang nehme und durch dich vollendet werde. Durch Christus, unseren Herrn.<br>R. Amen.<br><br><em>Alle sagen:</em> Der allmächtige und barmherzige Herr schenke uns Freude mit Frieden, Besserung des Lebens, Raum für wahre Buße, die Gnade und den Trost des Heiligen Geistes und das Beharren im Opus Dei.<br><br>V. Heiliger Michael.<br>R. Bitte für uns.<br>V. Heiliger Gabriel.<br>R. Bitte für uns.<br>V. Heiliger Raphael.<br>R. Bitte für uns.<br>V. Heiliger Petrus.<br>R. Bitte für uns.<br>V. Heiliger Paulus.<br>R. Bitte für uns.<br>V. Heiliger Johannes.<br>R. Bitte für uns.<br><br><em>Wenn ein Priester anwesend ist, sagt der Leiter:</em> Vater, spende uns den Segen.<br><em>Der Priester segnet:</em> Der Herr sei in euren Herzen und auf euren Lippen, im Namen des Vaters † und des Sohnes und des Heiligen Geistes.<br>R. Amen.<br><br>V. Friede.<br>R. In Ewigkeit.",
      la: "<em>Sacérdos, si Preces modorátur, exsúrgit et áddit, stans étiam dum recítat oratiónem:</em><br><br>V. Dóminus vobíscum.<br>R. Et cum spíritu tuo.<br><br>Orémus. Deus, cui próprium est miseréri semper et párcere: súscipe deprecatiónem nostram. Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut tibi casto córpore serviámus, et mundo corde placeámus.<br><br>Actiónes nostras, quǽsumus Dómine, aspirándo prǽveni et adiuvándo proséquere: ut cuncta nostra orátio et operátio a te semper incípiat, et per te cœpta finiátur. Per Christum Dóminum nostrum.<br>R. Amen.<br><br><em>Omnes dicunt:</em> Gáudium cum pace, emendatiónem vitæ, spátium veræ pœniténtiæ, grátiam et consolatiónem Sancti Spíritus atque in Ópere Dei perseverántiam, tríbuat nobis Omnípotens et Miséricors Dóminus.<br><br>V. Sancte Míchaël.<br>R. Ora pro nobis.<br>V. Sancte Gábriel.<br>R. Ora pro nobis.<br>V. Sancte Ráphaël.<br>R. Ora pro nobis.<br>V. Sancte Petre.<br>R. Ora pro nobis.<br>V. Sancte Paule.<br>R. Ora pro nobis.<br>V. Sancte Ioánnes.<br>R. Ora pro nobis.<br><br><em>Cum adsit áliquis Sacérdos, dígnior ait:</em> Iube, Domne, benedícere.<br><em>Sacérdos benedícit:</em> Dóminus sit in córdibus vestris, et in lábiis vestris, in nómine Patris † et Fílii et Spíritus Sancti.<br>R. Amen.<br><br>V. Pax.<br>R. In ætérnum."
    },
   
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
    },
    
  },
  {
    id: "opusdei-begin",
    category: "opusdei",
    title: { en: "To Begin Prayer", nl: "Om het Gebed te Beginnen", de: "Zum Beginn des Gebets", la: "Ad Oratiónem Incipiéndam" },
    text: {
      en: "My Lord and my God, I firmly believe that you are here, that you see me, that you hear me. I adore you with profound reverence. I ask your pardon for my sins, and grace to make this time of prayer fruitful. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Mijn Heer en mijn God, ik geloof vast dat U hier aanwezig bent, dat U mij ziet, dat U mij hoort. Ik aanbid U met diepe eerbied. Ik vraag vergeving voor mijn zonden en de genade om dit gebedsmoment vruchtbaar te maken. Mijn Onbevlekte Moeder, heilige Jozef, mijn vader en heer, mijn engelbewaarder: kom voor mij tussenbeide.",
      de: "Mein Herr und mein Gott, ich glaube fest, dass du hier bist, dass du mich siehst, dass du mich hörst. Ich bete dich an mit tiefer Ehrfurcht. Ich bitte dich um Verzeihung für meine Sünden und um die Gnade, diese Gebetszeit fruchtbar zu machen. Meine Unbefleckte Mutter, heiliger Josef, mein Vater und Herr, mein Schutzengel: tretet für mich ein.",
      la: "Dómine et Deus meus, firmíter credo te hic adésse, me vidére, me audíre. Te profúnda reveréntia adóro. Véniam peto pro peccátis meis, et grátiam ut hoc tempus oratiónis fructuósum sit. Mater mea Immaculáta, sancte Ioseph pater et dómine mi, Ángele Custos: intercédite pro me."
    },
   
  },
  {
    id: "opusdei-end",
    category: "opusdei",
    title: { en: "To End Prayer", nl: "Om het Gebed te Besluiten", de: "Zum Abschluss des Gebets", la: "Ad Oratiónem Claudéndam" },
    text: {
      en: "I thank you, my God, for the good resolutions, affections, and inspirations you have communicated to me in this meditation. I ask your help to put them into effect. My Immaculate Mother, Saint Joseph my father and lord, my Guardian Angel: intercede for me.",
      nl: "Ik dank U, mijn God, voor de goede voornemens, gevoelens en ingevingen die U mij tijdens deze overweging hebt geschonken. Ik vraag uw hulp om ze in praktijk te brengen. Mijn Onbevlekte Moeder, heilige Jozef, mijn vader en heer, mijn engelbewaarder: kom voor mij tussenbeide.",
      de: "Ich danke dir, mein Gott, für die guten Vorsätze, Gefühle und Eingebungen, die du mir in dieser Betrachtung geschenkt hast. Ich bitte um deine Hilfe, sie in die Tat umzusetzen. Meine Unbefleckte Mutter, heiliger Josef, mein Vater und Herr, mein Schutzengel: tretet für mich ein.",
      la: "Grátias tibi ago, Deus meus, pro bonis propósitis, afféctibus et inspiratiónibus quas mihi in hac meditatióne communicásti. Auxílium tuum peto ut ea ad efféctum perdúcam. Mater mea Immaculáta, sancte Ioseph pater et dómine mi, Ángele Custos: intercédite pro me."
    },
   
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
    name: { en: "Joyful Mysteries", nl: "Blijde Geheimen", de: "Freudenreiche Geheimnisse", la: "Mysteria Gaudiosa" },
    items: [
      { en: "The Annunciation", nl: "De aankondiging van de engel aan Maria", de: "Die Verkündigung des Herrn", la: "Annuntiatio" },
      { en: "The Visitation", nl: "Het bezoek van Maria aan Elisabeth", de: "Die Heimsuchung Mariens", la: "Visitatio" },
      { en: "The Nativity", nl: "De geboorte van Jezus", de: "Die Geburt Jesu", la: "Nativitas" },
      { en: "The Presentation in the Temple", nl: "De opdracht van Jezus in de tempel", de: "Die Darstellung Jesu im Tempel", la: "Praesentatio" },
      { en: "The Finding in the Temple", nl: "Het terugvinden van Jezus in de tempel", de: "Das Wiederfinden Jesu im Tempel", la: "Inventio in Templo" }
    ]
  },
  sorrowful: {
    days: [2, 5], // Tuesday, Friday
    name: { en: "Sorrowful Mysteries", nl: "Droevige Geheimen", de: "Schmerzhafte Geheimnisse", la: "Mysteria Dolorosa" },
    items: [
      { en: "The Agony in the Garden", nl: "De doodsangst van Jezus in de Hof van Olijven", de: "Die Todesangst Jesu am Ölberg", la: "Agonia in Horto" },
      { en: "The Scourging at the Pillar", nl: "De geseling", de: "Die Geißelung Jesu", la: "Flagellatio" },
      { en: "The Crowning with Thorns", nl: "De doornenkroning", de: "Die Dornenkrönung Jesu", la: "Coronatio Spinis" },
      { en: "The Carrying of the Cross", nl: "De kruisdraging", de: "Die Kreuztragung Jesu", la: "Baiulatio Crucis" },
      { en: "The Crucifixion and Death", nl: "De kruisiging en dood van Jezus", de: "Die Kreuzigung und der Tod Jesu", la: "Crucifixio" }
    ]
  },
  glorious: {
    days: [0, 3], // Sunday, Wednesday
    name: { en: "Glorious Mysteries", nl: "Glorievolle Geheimen", de: "Glorreiche Geheimnisse", la: "Mysteria Gloriosa" },
    items: [
      { en: "The Resurrection", nl: "De verrijzenis van Jezus", de: "Die Auferstehung Jesu", la: "Resurrectio" },
      { en: "The Ascension", nl: "De hemelvaart van Jezus", de: "Die Himmelfahrt Jesu", la: "Ascensio" },
      { en: "The Descent of the Holy Spirit", nl: "De nederdaling van de Heilige Geest", de: "Die Herabkunft des Heiligen Geistes", la: "Descensus Spiritus Sancti" },
      { en: "The Assumption of Mary", nl: "De tenhemelopneming van Maria", de: "Die Aufnahme Mariens in den Himmel", la: "Assumptio Mariae" },
      { en: "The Coronation of Mary", nl: "De kroning van Maria in de hemel", de: "Die Krönung Mariens", la: "Coronatio Mariae" }
    ]
  },
  luminous: {
    days: [4], // Thursday
    name: { en: "Luminous Mysteries", nl: "Lichtende Geheimen", de: "Lichtreiche Geheimnisse", la: "Mysteria Luminosa" },
    items: [
      { en: "The Baptism in the Jordan", nl: "De doop van Jezus in de Jordaan", de: "Die Taufe Jesu im Jordan", la: "Baptismus in Iordane" },
      { en: "The Wedding at Cana", nl: "De bruiloft van Kana", de: "Die Selbstoffenbarung bei der Hochzeit zu Kana", la: "Nuptiae in Cana" },
      { en: "The Proclamation of the Kingdom", nl: "De verkondiging van het Rijk Gods", de: "Die Verkündigung des Reiches Gottes", la: "Proclamatio Regni" },
      { en: "The Transfiguration", nl: "De gedaanteverandering op de berg Tabor", de: "Die Verklärung Jesu", la: "Transfiguratio" },
      { en: "The Institution of the Eucharist", nl: "De instelling van de Eucharistie", de: "Die Einsetzung der Eucharistie", la: "Institutio Eucharistiae" }
    ]
  }
};

const CLOSING_REF = "salve-regina";
