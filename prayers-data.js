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
    source: {
      en: "Traditional Marian invocation prayed after the five mysteries, before the Litany of Loreto; cited by St. Josemaría Escrivá in The Way, no. 496.",
      nl: "Traditionele Mariale aanroeping, gebeden na de vijf geheimen, vóór de Litanie van Loreto.",
      de: "Traditionelle marianische Anrufung nach den fünf Geheimnissen, vor der Lauretanischen Litanei; zitiert vom heiligen Josefmaria Escrivá in Der Weg, Nr. 496 (opusdei.org).",
      la: "Invocátio Marialis traditionalis (translatio propria)."
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
      en: "Lord, have mercy. Christ, have mercy. Lord, have mercy.<br>Christ, hear us. Christ, graciously hear us.<br>God the Father of heaven, have mercy on us. God the Son, Redeemer of the world, have mercy on us. God the Holy Spirit, have mercy on us. Holy Trinity, one God, have mercy on us.<br><br><em>(Response after each title below: pray for us.)</em><br>Holy Mary · Holy Mother of God · Holy Virgin of virgins · Mother of Christ · Mother of the Church · Mother of Mercy · Mother of divine grace · Mother of Hope · Mother most pure · Mother most chaste · Mother inviolate · Mother undefiled · Mother most amiable · Mother most admirable · Mother of good counsel · Mother of our Creator · Mother of our Savior · Virgin most prudent · Virgin most venerable · Virgin most renowned · Virgin most powerful · Virgin most merciful · Virgin most faithful · Mirror of justice · Seat of wisdom · Cause of our joy · Spiritual vessel · Vessel of honor · Singular vessel of devotion · Mystical rose · Tower of David · Tower of ivory · House of gold · Ark of the covenant · Gate of heaven · Morning star · Health of the sick · Refuge of sinners · Solace of migrants · Comfort of the afflicted · Help of Christians<br><br>Queen of Angels · Queen of Patriarchs · Queen of Prophets · Queen of Apostles · Queen of Martyrs · Queen of Confessors · Queen of Virgins · Queen of all Saints · Queen conceived without original sin · Queen assumed into Heaven · Queen of the most holy Rosary · Queen of families · Queen of Peace",
      nl: "Heer, ontferm U over ons. Christus, ontferm U over ons. Heer, ontferm U over ons.<br>Christus, aanhoor ons. Christus, verhoor ons.<br>God, hemelse Vader, ontferm U over ons. God, Zoon, Verlosser van de wereld, ontferm U over ons. God, heilige Geest, ontferm U over ons. Heilige Drievuldigheid, één God, ontferm U over ons.<br><br><em>(Antwoord na elke titel hieronder: bid voor ons.)</em><br>Heilige Maria · Heilige Moeder van God · Heilige Maagd der maagden · Moeder van Christus · Moeder van de Kerk · Moeder van barmhartigheid · Moeder van de goddelijke Genade · Moeder van de hoop · Allerreinste Moeder · Zeer kuise Moeder · Maagdelijke Moeder · Onbevlekte Moeder · Beminnelijke Moeder · Bewonderenswaardige Moeder · Moeder van goede raad · Moeder van de Schepper · Moeder van de Zaligmaker · Allervoorzichtigste Maagd · Eerwaardige Maagd · Lofwaardige Maagd · Machtige Maagd · Goedertieren Maagd · Getrouwe Maagd · Spiegel van gerechtigheid · Zetel van Wijsheid · Oorzaak van onze Blijdschap · Geestelijk vat · Eerwaardig vat · Heerlijk vat van godsvrucht · Mystieke roos · Toren van David · Ivoren toren · Gouden huis · Ark van het verbond · Deur van de hemel · Morgenster · Heil van de zieken · Toevlucht van de zondaren · Troost van de migranten · Troosteres van de bedroefden · Hulp van de christenen<br><br>Koningin van de engelen · Koningin van de aartsvaders · Koningin van de profeten · Koningin van de apostelen · Koningin van de martelaren · Koningin van de belijders · Koningin van de maagden · Koningin van alle heiligen · Koningin zonder erfsmet ontvangen · Koningin in de hemel opgenomen · Koningin van de heilige rozenkrans · Koningin van het gezin · Koningin van de vrede",
      de: "Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.<br>Christus, höre uns. Christus, erhöre uns.<br>Gott Vater im Himmel, erbarme dich unser. Gott Sohn, Erlöser der Welt, erbarme dich unser. Gott Heiliger Geist, erbarme dich unser. Heilige Dreifaltigkeit, ein einiger Gott, erbarme dich unser.<br><br><em>(Antwort nach jedem Titel unten: bitte für uns.)</em><br>Heilige Maria · Heilige Mutter Gottes · Heilige Jungfrau der Jungfrauen · Mutter Christi · Mutter der Kirche · Mutter der Barmherzigkeit · Mutter der göttlichen Gnade · Mutter der Hoffnung · Du reine Mutter · Du keusche Mutter · Du unversehrte Mutter · Du unbefleckte Mutter · Du liebenswürdige Mutter · Du wunderbare Mutter · Du Mutter des guten Rates · Du Mutter des Schöpfers · Du Mutter des Erlösers · Du weise Jungfrau · Du ehrwürdige Jungfrau · Du lobwürdige Jungfrau · Du mächtige Jungfrau · Du gütige Jungfrau · Du getreue Jungfrau · Du Spiegel der göttlichen Heiligkeit · Du Sitz der Weisheit · Du Ursache unserer Freude · Du Tempel des Heiligen Geistes · Du Tabernakel der ewigen Herrlichkeit · Du Wohnung, ganz Gott geweiht · Du geheimnisvolle Rose · Du Turm Davids · Du elfenbeinerner Turm · Du goldenes Haus · Du Arche des Bundes · Du Pforte des Himmels · Du Morgenstern · Du Heil der Kranken · Du Zuflucht der Sünder · Du Trost der Migranten · Du Trösterin der Betrübten · Du Hilfe der Christen<br><br>Du Königin der Engel · Du Königin der Patriarchen · Du Königin der Propheten · Du Königin der Apostel · Du Königin der Märtyrer · Du Königin der Bekenner · Du Königin der Jungfrauen · Du Königin aller Heiligen · Du Königin, ohne Makel der Erbsünde empfangen · Du Königin, in den Himmel aufgenommen · Du Königin des heiligen Rosenkranzes · Du Königin der Familie · Du Königin des Friedens",
      la: "Kýrie, eléison. Christe, eléison. Kýrie, eléison.<br>Christe, audi nos. Christe, exáudi nos.<br>Pater de cælis, Deus, miserére nobis. Fili, Redémptor mundi, Deus, miserére nobis. Spíritus Sancte, Deus, miserére nobis. Sancta Trínitas, unus Deus, miserére nobis.<br><br><em>(Post quamque invocatiónem: ora pro nobis.)</em><br>Sancta María · Sancta Dei Génetrix · Sancta Virgo vírginum · Mater Christi · Mater Ecclésiæ · Mater misericórdiæ · Mater Divínæ grátiæ · Mater spei · Mater puríssima · Mater castíssima · Mater invioláta · Mater intemeráta · Mater amábilis · Mater admirábilis · Mater boni Consílii · Mater Creatóris · Mater Salvatóris · Virgo prudentíssima · Virgo veneránda · Virgo prædicánda · Virgo potens · Virgo clemens · Virgo fidélis · Spéculum iustítiæ · Sedes sapiéntiæ · Causa nostræ lætítiæ · Vas spirituále · Vas honorábile · Vas insígne devotiónis · Rosa mýstica · Turris Davídica · Turris ebúrnea · Domus áurea · Fœderis arca · Iánua cæli · Stella matutína · Salus infirmórum · Refúgium peccatórum · Solácium migrántium · Consolátrix afflictórum · Auxílium Christianórum<br><br>Regína Angelórum · Regína Patriarchárum · Regína Prophetárum · Regína Apostolórum · Regína Mártyrum · Regína Confessórum · Regína Vírginum · Regína Sanctórum ómnium · Regína sine labe originali concépta · Regína in cælum assúmpta · Regína sacratíssimi Rosárii · Regína famíliæ · Regína pacis"
    },
    note: {
      en: "Lamb of God, who takes away the sins of the world, spare us, O Lord.<br>Lamb of God, who takes away the sins of the world, graciously hear us, O Lord.<br>Lamb of God, who takes away the sins of the world, have mercy on us.<br><br>V. Pray for us, O holy Mother of God.<br>R. That we may be made worthy of the promises of Christ.<br><br>Let us pray. Grant, we beseech Thee, O Lord God, that we thy servants may enjoy perpetual health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, may be delivered from present sorrow and obtain eternal joy. Through Christ our Lord. Amen.",
      nl: "Lam Gods, dat de zonden van de wereld wegneemt, spaar ons Heer.<br>Lam Gods, dat de zonden van de wereld wegneemt, verhoor ons Heer.<br>Lam Gods, dat de zonden van de wereld wegneemt, ontferm U over ons.<br><br>V. Bid voor ons, heilige Moeder van God.<br>R. Opdat wij de beloften van Christus waardig worden.<br><br>Laat ons bidden. Heer God, wij bidden U: geef ons, uw dienaren, dat wij ons mogen verheugen in een bestendige gezondheid van ziel en lichaam; mogen wij door de verheven voorspraak van de heilige Maria, die altijd maagd is gebleven, verlost worden van de tegenwoordige droefheid en de eeuwige vreugde genieten. Door Christus, onze Heer. Amen.",
      de: "Lamm Gottes, du nimmst hinweg die Sünden der Welt, verschone uns, o Herr.<br>Lamm Gottes, du nimmst hinweg die Sünden der Welt, erhöre uns, o Herr.<br>Lamm Gottes, du nimmst hinweg die Sünden der Welt, erbarme dich unser.<br><br>V. Bitte für uns, o heilige Gottesmutter.<br>R. Auf dass wir würdig werden der Verheißungen Christi.<br><br>Lasset uns beten. Gütiger Gott, du hast allen Menschen Maria zur Mutter gegeben; höre auf ihre Fürsprache; nimm von uns die Traurigkeit dieser Zeit, dereinst aber gib uns die ewige Freude. Durch Christus, unsern Herrn. Amen.",
      la: "Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine.<br>Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine.<br>Agnus Dei, qui tollis peccáta mundi, miserére nobis.<br><br>V. Ora pro nobis, sancta Dei Génetrix.<br>R. Ut digni efficiámur promissiónibus Christi.<br><br>Orémus. Concéde nos fámulos tuos, quæsumus, Dómine Deus, perpétua mentis et córporis sanitáte gaudére: et gloriósa beátæ Maríæ semper Vírginis intercessióne, a præsénti liberári tristítia, et ætérna pérfrui lætítia. Per Christum Dóminum nostrum. Amen."
    },
    source: {
      en: "Traditionally prayed after the Rosary, especially in May and October; includes the three titles Pope Francis added in 2020 (Mother of Mercy, Mother of Hope, Solace of Migrants). The German closing prayer follows standard German-language usage, which differs slightly from the Latin/English/Dutch collect.",
      nl: "Traditioneel gebeden na de rozenkrans, vooral in mei en oktober; met de drie titels die paus Franciscus in 2020 toevoegde.",
      de: "Traditionell nach dem Rosenkranz gebetet, besonders im Mai und Oktober; mit den drei 2020 von Papst Franziskus hinzugefügten Titeln.",
      la: "Post Rosárium recitári solet, præsértim mense Maio et Octóbri."
    }
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
    source: {
      en: "Prayer taught by St. Josemaría Escrivá — opusdei.org",
      nl: "Gebed onderwezen door de heilige Jozefmaria Escrivá — opusdei.org (eigen vertaling)",
      de: "Gebet gelehrt vom heiligen Josefmaria Escrivá — opusdei.org (eigene Übersetzung)",
      la: "Oratio a S. Iosephmaria Escrivá tradita — opusdei.org (translatio propria)"
    }
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
    source: {
      en: "Prayer taught by St. Josemaría Escrivá — opusdei.org",
      nl: "Gebed onderwezen door de heilige Jozefmaria Escrivá — opusdei.org (eigen vertaling)",
      de: "Gebet gelehrt vom heiligen Josefmaria Escrivá — opusdei.org (eigene Übersetzung)",
      la: "Oratio a S. Iosephmaria Escrivá tradita — opusdei.org (translatio propria)"
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
