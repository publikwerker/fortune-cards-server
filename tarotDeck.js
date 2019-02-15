const deck= [
  {
    id: '0',
    name: 'The Fool',
    desc: `The first Atu, or Key, is The Fool, who represents the path from Kether (Crown) to Chokmah (Wisdom). 
    The Hebrew letter attributed to the first Path is Aleph. Aleph has the numerical value of 1 and means the Ox. Aleph is the first of three Hebrew letters designated as the Mothers. 
    In the Book of Thoth, Aleister Crowley dedicates twenty-four pages toward describing the inner mysteries of The Fool card. It would behoove anyone to read his essays. 
    On this journey, The Fool is the narrator and the main protagonist. The Fool is you and I, and we must remember to keep our childlike feelings of awe and wonder as we marvel at the world around us. It’s all part of a greater pattern that the Fool manifests.
    The Fool is associated with the element of Air, and there is a lot of emphasis placed on the duality of air: it is full but empty. The Fool card has the number Zero. Zero represents the Union of the Duality and the Annihilation of the Self. One plus negative one equals zero. Any abstract concept of the number Zero would apply.
    As the Fool represents the element of Air, it has a relationship with the suit of Swords. 
    The Fool and The Magus are essentially hermaphroditic Beings. The Source Energy proceeding from Kether is undifferentiated until it reaches Chokmah. There is no male-ness until it is defined within Chokmah.
    Their secret title is The Spirit of Athena.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0d2e0d92978e7cd0c6d9/1549405670144/0+The+Fool.jpg?format=500w',
    facing: 0,
  },
  {
    id: 'I',
    name: 'The Magus',
    desc: `The second Atu, or Key, is The Magus, who represents the Path from Kether (Crown) to Binah (Understanding). Philosophically, this card precedes Understanding. Quite literally, this card is one of the paths to Understanding, yet it is also above Understanding.
    The Hebrew letter attributed to the second Path is Beth. Beth has the numerical value of 2 and means a House. 
    Given the number 1, The Magus is attributed to the planet and the god Mercury, messenger of the Gods. In the Thoth deck, this card is titled The Magus, but in the text, Crowley names it the Juggler and says the midiaeval French title is “Le Bâteleur”, or The Wand Bearer.Mercury, too, is a wand bearer. 
    This card is the Logos of John, 1:1-3, the Word, and the Will. As the Word, this card counter-balances the Fool, who was Silence, and as the Word, The Magus is the Son, in a sense, and is counterpart to The High Priestess.
    Like The Fool, The Magus is essentially hermaphroditic. The Source Energy proceeding from Kether is undifferentiated until it reaches Binah. There is no female-ness until it is defined withing Binah.
    Their secret title is the Magus of Power.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0e39a4222f9c6522c406/1549405771423/1+The+Magus.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'II',
    name: 'The High Priestess',
    desc: `This card represents the third Path, the Path from Kether (Crown) to Tiphareth (Beauty). Perfectly balanced on the Tree, her secret title is The Priestess of the Silver Star.
    The High Priestess is attributed to the Hebrew letter Gimel, which means Camel and has the numeric value of 3. Gimel, together with Daleth and Heh, forms what Crowley calls a “Triune Goddess”, three forms showing the Feminine Symbol, Yin: the Virgin, the Wife, and the Crone, respectively.
    The High Priestess is the first card thusfar to descend below the Abyss and the first to differentiate a gender. She is a wholly feminine card. Accordingly, she is attributed to the Moon.
    For those who have experienced Conversation with their Holy Guardian Angel, some describe this Path as the intelligence or the thoughts of the Holy Guardian Angel. 
    In the symbology of Tetragrammaton, this is the Path connecting the Father to the Son.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0ed0e5e5f0c85bf0a8f8/1549405919581/2+The+High+Priestess.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'III',
    name: 'The Empress',
    desc: `The Empress card is attributed to the fourth Path. One of only three Paths that lie entirely above the Abyss, she completes the Supernal Triangle alternately known as the Crown or the Macroprosopos, The Greater Countenance of God. 
    The fourth Path connects the All-Father, Chokmah, to the Great Mother, Binah, literally uniting Wisdom and Understanding. Her  secret title is The Daughter of the Mighty Ones.
    The Hebrew letter attributed to the fourth Path is Daleth. Daleth has the numerical value of 4 and means a Door. The Paths of the Empress and the High Priestess cross, and The Empress is the door through which The High Priestess passes when crossing from Intellect to Higher Consciousness. 
    Together with Gimel and Heh, Daleth forms what Crowley calls a “Triune Goddess”, three forms showing the Feminine Symbol, Yin. As the middle letter in the triplicity, The Empress represents both the most developed and the most generalized manifestation of Female: as wife/mother. Accordingly, this card refers to the planet Venus. 
    Venus is attributed to Air and Earth, combining the highest spiritual with the lowest material qualities. For this reason, she symbolizes the Alchemical energy of Salt. Salt is the inactive principle of Nature and must be energized by Sulfur to maintain the whirling equilibrium of the Universe.
    It’s important to note that the shape of The Tree of Life comprised of the ten Sephiroth is that of Venus. “The doctrine implied is that the fundamental formula of the Universe is Love.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0f38c83025d7e54da146/1549406018265/3+The+Empress.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'IV',
    name: 'The Emperor',
    desc: `As with the Lesser Arcana, the number Four represents Law, Rule, and Government. Traditionally, The Emperor was a fiery and energetic card, and it represented a power that was not sustainable. In its old placement on The Tree of Life, The Emperor was attributed to Aries and Mars, to sheep and war, as the counterpart to the Empress card. 
    The Emperor card was reconfigured and given a new place on the Tree of Life by Aleister Crowley, however, and The Emperor is now attributed to the Hebrew letter Tzaddi and to the astrological sign of Aquarius. 
    Crowley understood that with the New Aeon there would be a New Order to honor new values. He intuited the fall of the Patriarchy, and he foretold a new era of equality that would be ruled not by Osiris, the God who was slain and resurrected, but by Horus, the hermaphroditic child-god. With its new placement, the card is no longer associated with the concept of Government of sheep through War. The new attribution of government for the New Age is to the peaceful and enlightened Aquarius.
    Tzaddi is the path which connects Netzach to Yesod. Tzaddi has the numeric value of 90 and its final form has the value of 90,000. It means the Fish-hook.
    Its secret title is the Sun of the Morning, Chief among the Mighty.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0f49ec212d2c7a35f770/1549406036090/4+The+Emperor.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'V',
    name: 'The Hierophant',
    desc: `The Hierophant rules the New Aeon, Atu XX, which was briefly mentioned in the previous card. Egyptian symbolism serves to describe progression of rulers who each have a term of roughly two-thousand years. In an astrological sense, this can be described as the end of the Age of Pisces and the beginning of the Age of Aquarius. In a literal interpretation of this, one may say it is the end of the Age of the Fish and the dawn of the Age of Humanity.
    Once, Isis, the Great Mother, was worshiped. The Earth was holy and the Feminine was divine. Then, for a period of time, Osiris, the dying and resurrected god, was ruler. During this time, Maleness was considered divine, sacrifice and restriction were revered, and other than the virginal, all that was Feminine was reviled. 
    Thankfully, a New Age has dawned. Osiris the Father has been deposed, and He has been replaced by His Child, Horus. Now is the time of Peace and Love. The word of Sin is Restriction. Love is the Law.
    The card represents the Hebrew letter Vau, which means a Nail. The letter is associated with Taurus and has the numeric value of 6. The path connects Chokmah (Wisdom) to Chesed (Mercy).
    Its secret title is the Magus of the Eternal.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5a0f5da4222f9c6522e632/1549406052111/5+The+Hierophant.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'VI',
    name: 'The Lovers',
    desc: `This card has a second title: The Brothers. Six often denotes perfection, and who would be a more perfect embodiment of the Age of Love than lovers or siblings?  This card is a double card, and it is the twin of Atu XIV, Art, which is also a double card, making both cards sort of double-doubles. Studying the two cards can be most enlightening.
    This card refers to Cain/Abel, Eve/Lilith, idea/contradiction, particle/antiparticle, analysis/synthesis. Any idea suggests its opposite. With Atu XIV, VI composes the alchemical maxim: Solve et coagula. As with Atu I, the Juggler, we are to consider equilibrium, its fundamental importance, and its necessity. Crowley hints that this card is of transendental importance. “In its original form, it was the story of Creation.”
    Atu VI refers to Gemini and is ruled by Mercury. The corresponding Hebrew letter is Zayin, which means a Sword. Crowley calls the sword “an engine of division”, and it’s good to note he doesn’t call it a tool. The suit of swords refers to air and the intellectual world. The path of Zayin is from Binah (Understanding) to Tipareth (Beauty). Crowley states this path depicts inspiration.
    Their secret title is the Children of the Voice: the Oracles of the Mighty God.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5f1ef9619ad9e69184e2/1549557556684/6+The+Lovers.jpg?format=500w',
    facing: 0,
  },
  {
    id: 'VII',
    name: 'The Chariot',
    desc: `Atu VII is called The Chariot, and it is associated with the astrological sign of Cancer, the cardinal sign of Water. As The Hierophant brought down the Supernal Fire from Chokmah, The Chariot brings Supernal Water from The Great Sea, Binah (Understanding) to Geburah (Strength). This path is associated with the Hebrew letter Cheth, which means a Fence, and has the numerical value of eight.
    Its secret title is the Child of the Powers of the Waters: the Lord of the Triumph of Light.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5f62fa0d606d797db642/1549557636539/7+The+Chariot.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'VIII',
    name: 'Adjustment',
    desc: `This card was called Justice in the old pack, but since the concept of justice is a human concept and not a law of nature, Crowley prefers the name Adjustment because, he says, “Nature is not just, according to any theological or ethical idea; but Nature is exact.”
    This card represents Libra, which is ruled by Venus, and in which Saturn is exalted. It represents the final adjustment of Tetragrammaton, where the Daughter is redeemed by her marriage to the Son and set upon the throne of the Mother, thereby awakening the Eld of the All-Father.
    This card, representing the Hebrew letter Lamed, is the female complement to the Fool card. The letters Alef Lamed spell AL, and constitute the secret key to Liber AL, the Book of the Law. She represents the “complete formula of the Dyad”, Manifestation, which may always we cancelled out “by the equilibration of opposites”. She is Karma, and she hold the scales and the sword. She is a hieroglyph of “Love is the Law; Love under Will”. “Every form of energy must be directed, must be applied with integrity, to the full satisfaction of its destiny.”
    Lamed means Ox Goad and has the numerical value of 30. It is the path between Geburah, Strength, and Tipareth, Beauty.
    Its secret title is the Daughter of the Lords of Truth, the Ruler of the Balance.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5f8e1905f47e33a7e829/1549557656600/8+Adjustment.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'IX',
    name: 'The Hermit',
    desc: `This card is attributed to the letter Yod, which is the first letter of Tetragrammaton, and therefore represents the Father, the Logos, Wisdom, the highest form of Mercury, and whose manifestation on the physical plane is spermatozoa. 
    Yod is ruled by Virgo, the most fertile and receptive of the signs. This card represents Fertility in its highest sense. This card also represents the myth of Persephone.
    Yod is the path from Chesed (Mercy) to Tipareth (Beauty). On the Tree, it counter-balances Adjustment, Atu XIII. Yod means a Hand and has the numerical value of 10. It’s interesting to note that Virgo is ruled by and exalts Mercury.
    Its secret title is the Prophet of the Eternal, the Magus of the Voice of Power.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5fa2e79c70a85404339e/1549557675039/9+The+Hermit.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'X',
    name: 'Fortune',
    desc: `This card is attributed to Jupiter, which is known as “the Greater Fortune” in astrology. The path corresponds to the letter Kaph, which means the Palm of the hand, where fortunes are read. The letter Kaph has the numerical value of 20, but the final form has a value of 500. The path it represents connects Chesed, Mercy, to Netzach, Victory.
    The idea behind this card is that change is constant. The elements continually revolve. We are directed to consider the Wheel of Fortune. A wheel spins, rolls, and travels anywhere you want to go with relative ease, but we must attain the axle, which does this without moving.
    Its secret title is the Lord of the Forces of Life.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5fb4e5e5f02e133a3ff6/1549557695638/10+Fortune.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XI',
    name: 'Lust',
    desc: `Formerly named Strength, Crowley renamed this card because he considered the concept to be about more than just strength. The concept is also the joy of strength exercised, perhaps the being strong or the having of strength. The term Lust has added meaning for Thelemites. There is a quote in the Book of the Law admonishing us against the “lust of result” when manifesting our Will.
    The Lust card is attributed to the sign of Leo and the letter Teth, which means a Serpent and has the numerical value of 9. Crowley says this is the most powerful of the twelve Zodiacal cards. Leo is the Kerub of Fire and is ruled by the Sun. The path of Teth connects Chesed, Mercy, to Geburah, Strength. The path is balanced both vertically and horizontally on the tree.
    Its secret title is the Daughter of the Flaming Sword.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5fcc7817f77aa32d8c3b/1549557715712/11+Lust.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XII',
    name: 'The Hanged man',
    desc: `This card is represented by the letter Mem and the element of water. In particular, it represents the spiritual function of water in initiation to symbolize death and rebirth/baptism. The Hanged Man represents the descent of light into darkness in order to redeem it, but his is redemption without sacrifice, and specifically no self-sacrifice. This Hanged Man represents the God of the previous Aeon. “The whole idea of sacrifice is a misconception of nature.” Also, Crowley says, “Redemption is a bad word; it implies a debt. Fore every star possesses boundless wealth; the only proper was to deal with the ignorant is to bring them to the knowledge of their starry heritage. To do this, it is necessary to behave as must be done in order to get on good terms with animals and children: to treat them with absolute respect; even, in a certain sense, with worship.” Mem is the path between Geburah, Strength, and Hod, Splendor, and it has the numerical value of 40. Its final form has a value of 600.
    Its secret title is the Spirit of the Mighty Waters.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5fe14785d3fecc205577/1549557742364/12+The+Hanged+Man.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XIII',
    name: 'Death',
    desc: `The Death card is probably the least understood and most feared by those of the previous Aeon. It’s unhelpful and unfortunate that they were taught that death is an Ending. This path is represented by the letter Nun, which means a Fish. The card represents the sign of Scorpio and the alchemical idea of putrefaction: “The strain of the environment has become intolerable, and the attacked element willingly subjects itself to change.” This card, along with Atu XI, Lust, and Atu XII, form a mini magickal narrative. There are three essential types of putrefaction, each represented by the fish, the serpent, and the eagle. This card is a more complete idea of death/resurrection that was corrupted by the Black Lodge of a secret male Creator/Destroyer God, Atu XV.
    Nun is the path which connects Tipareth (Beauty) to Netzach (Victory). It has the numerical value of 50, and its final version has a value of 700.
    Its secret title is the Child of the Great Transformers, the Lord of the Gate of Death.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c5ff9085229ad86fdb78c/1549557766642/13+Death.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XIV',
    name: 'Art',
    desc: `The Art card is attributed to Sagittarius, the archer. It represents the letter Samech, which means a Prop and has the numeric value of 60. The path descends from Tipareth (Beauty) the seat of our perfect selves, to Yesod (the Foundation). Connecting Beauty to Foundation, it represents the specific Alchemical process of putrefaction that produces a Rainbow.
    The Art card was known as Temperance under the old Gods. They are a double card, neither male nor female but a little of both. They complete the Lovers card and form a double-double symbol, as both cards are both male and female. The Egyptian God Horus is said to rule the Age of Aquarius. Horus was a double god, male and female, a schizophrenic hermaphrodite. This New Age was prophesized to herald a great mingling of the sexes. Choosing the name Art over Temperance illustrates one of the great philosophical differences between the Ages. The only sin is restriction.
    Its secret title is the Daughter of the Reconcilers, the Bringer-Forth of Life.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c6011e4966b048bc9b40c/1549557800050/14+Art.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XV',
    name: 'The Devil',
    desc: `The Devil is attributed to the letter Ayin, which means an Eye, has the numeric value of 70, and refers to Capricorn in the Zodiac. Since Capricorn is ruled by Saturn, this card is the masculine energy at its most masculine.
    This path connects Tipareth (Beauty) to Hod (Splendor). It’s interesting to note that the Devil and Death are symmetrically placed on the Tree. Crowley gives a hint that these two paths, together with Art, are the key “by which idea manifests as form”, and he also states the “formula for this card is the appreciation of all existing things”.
    Atu IX, Zero, and XV represent the sacred name of God I A O. As such, they form the “threefold explanation of the male creative energy”.
    Its secret title is the Lord of the Gates of Matter, the Child of the Forces of Time.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c6033971a18566344730c/1549557828036/15+The+Devil.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XVI',
    name: 'The Tower',
    desc: `The Tower card is attributed to the letter Pe, which means Mouth and has the numerical value of 80. Its final form has the value of 800. The path of Pe is similarly balanced on the Tree as Teth, but Pe lies below Tipareth (Beauty) and connects Netzach (Victory) to Hod (Splendor). 
    In his discussion of the Art card, Atu XIV, Crowley names Hod and Netzach Thought and Bliss. It would be worthwhile to consider that the Mouth is the path that connects these two, and Art is the path that passes through it. 
    The Tower card is ruled also by Mars, so Crowley gives an alternate name: War. In the previous Aeon, this card was named the Blasted Tower. Its secret title is the Lord of the Hosts of the Mighty.
    All magickal symbols must be understood in a double sense, which includes the opposite, contradictory idea of its meaning. Again, there is the reminder that when a Thing is created, its opposite is also created. The destruction of both, or the Annihilation of both, is the return to the original Perfection.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c605115fcc0cc392c1ac9/1549557860139/16+The+Tower.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XVII',
    name: 'The Star',
    desc: `The Star card is attributed to the letter Heh and to the sign of the sign of Aries. In this deck, the Star holds the position usually occupied by the Emperor. The repositioning of this card on the Tree is one of the key tenets of Thelema, that “Every man and woman is a Star”. 
    At the time, Crowley was widely unpopular for suggesting that women were equal to men and even more so for also suggesting men and women possess an inherent divinity.
    The path of Heh connects Chokmah (Wisdom) to Tipareth (Beauty). Heh means a Window and has the numerical value of 5. Heh is a feminine letter and it is one of the Goddesses. Just as Atu 0, I, and IX are the Godforms, Atu II, III, and XVII describe three manifestations of feminine energy.
    Although Crowley states that this card, along with Trumps II and III, completes the Alchemical Triad of Mercury, Salt, and Sulfur, I’m going to assume that is also incorrect, and I’ll presume that the Star has assumed that role.
    Its secret title of this card is the Daughter of the Firmament; the Dweller between the Waters.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c6072fa0d606d797dc3e6/1549557889343/17+The+Star.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XVIII',
    name: 'Moon',
    desc: `The Moon card is attributed to the letter Qoph, which represents Pisces and the number 100. The letter Qoph means the Back of the Head and represents the potencies of the mind.
    This card represents midnight (especially the long dark night of the soul), it connects Netzach (Victory) to Malkuth (the Kingdom) and the path is guarded by Tabu. It is considered the path of the waning moon, of witchcraft, and of abominable deeds. As it references midnight and the end of winter, another name for this card is the Gateway of Resurrection.
    “Whatever horrors may afflict the soul, whatever abominations may excite the loathing of the heart, whatever terrors may assail the mind, the answer is the same at every stage: 'How splendid is the Adventure!'”
    Its secret title is the Ruler of Flux & Reflux, the Child of the Sons of the Mighty.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c608e53450aa0aa42b8b4/1549557904624/18+The+Moon.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XIX',
    name: 'The Sun',
    desc: `The Sun card, according to Crowley, is one of the simplest concepts in the deck. It is the Lord of the New Aeon. “He is the Lord of Light, Life, Liberty and Love. This Aeon has for its purpose the complete emancipation of the human race.”
    The Sun is attributed to the letter Resh, which means the Head and has a numerical value of 200. It connects Hod (Splendor) to Yesod (Foundation).
    The secret title of this card is the Lord of the Fire of the World.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c609eeef1a1953a66146f/1549557925170/19+The+Sun.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XX',
    name: 'The Aeon',
    desc: `The Aeon card is attributed to the letter Shin, which means a Tooth and has the numerical value of 300. The path of Shin connects Hod (Splendor) to Malkuth (Kingdom), and it is attributed to both Fire and Spirit. 
    “In this card it has been necessary to depart completely from the tradition of the cards, in order to carry on that tradition.” The old card was called The Last Judgment or The Angel. As the previous Aeon was ruled by Osiris, the Egyptian God who was slain and resurrected, the overarching theme of the Age of Pisces the fish has been one of resurrection and sacrifice. They awaited the destruction of the world by fire, which apparently took place in 1904, when the Fiery God Horus replaced the Airy God Osiris as Hierophant. “I am the Hawk-Headed Lord of Silence & of Strength; ... my left hand is empty, for I have crushed an Universe; & nought remains.”
    At this point it may be prudent to say a few things about Horus, our new Hierophant. Born of Nuit, the Goddess often portrayed as the starry night sky and who represents limitless possibities, and Hadit, a wingéd globe who represents the concept of consciousness as an individual, concentrated point of view of the greater Whole. Horus, the hawk-headed god was born, but they are a double god. Their extroverted side is Ra-hoor-khuit, and their passive or introverted form is Hoor-pa-kraat. Thus, this family forms an example of the Tetragrammaton, with Horus being both Son and Daughter.
    Its secret title is the Spirit of the Primal Fire.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c60b1f9619ad9e6919bc8/1549557948846/20+The+Aeon.jpg?format=500w',
    facing: 0,
  }, 
  {
    id: 'XXI',
    name: 'The Universe',
    desc: `This card is the final card in the story arc. Its name is The Universe, and it represents the Accomplishment of the Great Work. This is the future and the Best of All Possible Worlds.
    It is the final card in the deck, and as such it complements the first, The Fool. Just as The Fool was Nothing manifesting, so The Universe is manifestation full and ready to return to Nothing.
    The Universe is attributed to the letter Tau, which means a Cross. Tau has the numeric value of 400 and is attributed to both Saturn, who rules all of Time, and the Earth. 
    This Path forms a link from Malkuth (Kingdom), or the world as we know it, to Yesod (Foundation) and the Astral plane. Symbolically, this Path is the connection between the Moon and the Earth, between our conscious mind and our physical being, and between our internal world and our shared reality.
     The secret title of The Universe is The Great One of the Night of Time.`,
    img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5c60c6c83025da56a62cfb/1549557972954/21+The+Universe.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Fire of Air',
    name:'Father of Swords',
    desc:`This card is most commonly known at the King of Diamonds or the Knight of Swords. The Father cards all correspond with Chokmah (Wisdom), the second Sephira. It might seem logical that the first onrush of an element would correspond with Kether, the first Sephira, but Kether (the Crown) is truly indescribable. Until the Elemental Energy reaches Chokmah, it hasn’t acquired any “Air-ness”. Chokmah sits atop the right side of the Tree of Life, the Active, Male side.
    The Father of Swords represents the fiery part of Air: the wind, the storm, and the idea of attack. “He represents the violent power of motion applied to an apparently manageable element”. 
    In the I Ching, the fiery part of Air is depicted by the 32nd Hexagram Hêng, Duration. This seems to carry a warning that the candle who burns brightest, burns quickest.
    The Father of Swords rules the Zodiac in transition from Taurus to Gemini. Any person born with their Sun or Ascendent in the last third of Taurus or the first two thirds of Gemini is ruled by the Father of Air. 
    The person signified by this card is active, subtle, clever, fierce, delicate, and courageous. They may act too impulsively or be unable to make a decision so that their actions are easily overcome by their opposition. Here, Crowley warns that “Inadequate violence spells futility.”`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5747f9619ad3547023e2/1549752395247/father+of+air.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Water of Air',
    name:'Mother of Swords',
    desc:`The Mother of Swords is also commonly know by the name the Queen of Swords or the Queen of Spades. The Mother card represents Binah (Understanding), the third Sephira, in the suit of Air. 
    Binah, called the Great Mother, sits atop the left side of the Tree of Life, the Receptive, Passive, and “Female” side. The Mother of Swords is the feminine, receptive complement to The Father of Swords. (In no way do I advocate strictly male/female relationships in society, and neither did Crowley. These titles represent natural forces. For every gift there is an implied reception.) 
    Binah is also known as the Great Sea, and she is ruled by the planet Saturn. There is some resonance between this card and the Three of Swords, The Lord of Sorrow.
    Yod represented the active element of Fire. Here, Heh represents the receptive element of Water. She receives, ferments, and transmits the original energy of the Yod. The Mother of Swords represents the watery part of Air: its vibrations, Water’s elasticity, and its power of transmission. She is the “clear, conscious perception of Idea, the Liberator of the Mind.” 
    In the I Ching, the watery part of Air is described by the 28th Hexagram Ta Kuo, Proponderance of the Great.
    The Mother of Swords rules the Zodiac in the transition from Virgo to Libra. Anyone born with their Sun or Ascendent in the last third of Virgo or the first two thirds of Libra is ruled by the Mother of Air.
    The person signified by this card is intensely perceptive, observant, individualistic, confident, graceful, gracious, and just, or else sly, deceitful, unreliable, and dangerously beautiful.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5776085229b582bc9425/1549752419024/mother+of+air.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Air of Air',
    name:'Son of Swords',
    desc:`This card is also variously known as the Jack of Spades as well as the Prince or Knight of Swords.  
    Representing the Vau of Tetragrammaton, the Son corresponds with Tipareth (Beauty), the sixth Sephira. As the third letter of the Name, the Son also corresponds with the third element, Air. 
    The Son of Air represents the airy part of Air: the intellectual Mind, “easy enough to move, but quite unable to progress in any definite direction except by accident.” The airy part of Air is also represented by Clouds, as steady conveyers of water.
    In the I Ching, the airy part of Air is described by Sun, The Gentle, The Penetrating, Wind, the 57th Hexagram.
    Tipareth symbolizes not only the Son, but the Sun, as well. There is some resonance between this card and the Six of Swords, The Lord of Science.
    The Son of Air rules the Zodiac in the transition from Capricorn to Aquarius. Any person who is born with their Sun or Ascendent in the last third of Capricorn or the first two thirds of Aquarius is ruled by the Son of Swords.
    A person signified by such a card should be purely intellectual, full of jumbled ideas, intensely clever, rational, but unstable of purpose, and indifferent to even their own ideas. They reduce everything to unreality “by removing its substance and transmuting it to an ideal world of ratiocination which is purely formal and out of relation to any facts, even those upon which it is based.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f579e971a1829e8f28fb5/1549752437385/son+of+air.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Earth of Air',
    name:'Daughter of Swords',
    desc:`The Daughter of Swords is also known as the Princess or Page of Swords.She has no equivalent in decks of playing cards. Like the Mother, this is a strongly Feminine card. The Daughters’ purpose is to differentiate source Energy, to gather it, and to transmit it to the Aces of their element. She attracts a spirit to form a body. They are placed so that “a refined matter may attract its like, and the spiritual forces may not lose themselves in the void”.
    As the final letter in the Name, the Final Heh has a strong affinity to the first letter, Yod. In fact, the relationships between these cards are so strong that each implies the other. Once the cycle is complete, it is renewed. Heh occupies Malkuth (Kingdom), which is the tenth and bottom-most Sephira (Emanation) and represents Earth and the Earthly Plane. There is some resonance between the Daughter of Swords and the Ten of Swords, The Lord of Ruin.
    The Daughter is the twin of the Son. She is the final manifestation of Air, and she represents the earthy part of Air, the materialization of Idea and the influence of Heaven on Earth. She represents the anger of the Gods -- on the order of the Valkyrie and the Gorgon.
    In the I Ching, the earthy part of Air is described by the 18th Hexagram Ku, Work on What Has Been Spoiled, Decay, which Crowley names “the most unhappy symbol in the book”.
    Although they have no correlation with the Zodiac, the Daughters rule the sky over the Earth in quadrants moving eastward from the Great Pyramid. The Daughter of Air rules the Americas.
    A person signified by the Daughter of Swords is dexterous in managing controversial affairs and in settling controversies. She is stern, vengeful, clever, firm, aggressive, and possesses a destructive logic. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5640971a1829e8f2824d/1549752354269/daughter+of+air.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Fire of Earth',
    name:'Father of Coins',
    desc:`This card is most commonly known as the King of Disks, King of Spades, King of Coins, or Knight of Pentacles. 
    The Father cards correspond with Chokmah (Wisdom), the second Sephira (Emanation). It might seem logical that the first onrush of an element would correspond with Kether (The Crown), the first Sephira, but Kether is truly indescribable. Until the energy reaches Chokmah, it hasn’t acquired any “Earth-ness”. Chokmah sits atop the right side of the Tree, the Active side, which has a “Male-ness”.
    The Father of Coins represents the fiery part of Earth: mountains, earthquakes, gravity, and the Earth as an active producer of Life. There is a resonance between this card and the Two of Coins, The Lord of Change.
    In the I Ching, the fiery part of Earth is described by the 62nd Hexagram, Hsiao Kuo, a big K’an, Preponderance of the Small. The image of this Hexagram suggests the image of the Geomantic figure Cunjunctio, Mercury in Virgo.
    The Father of Coins rules the Zodiac in the transition from Leo to Virgo. Anyone born with their Sun or Ascendent in the last third of Leo or the first two thirds of Virgo is ruled by the Father of Earth. 
    Those signified by this card tend to be dull, heavy, preoccupied with material things, laborious and patient, but lacking initiative, courage, or intellect. Crowley laments how they “are always irritably meddling about petty matters; they interfere with, and inevitably spoil, whatever comes their way.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f58d0e5e5f0cc900579bc/1549752544775/father+of+earth.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Water of Earth',
    name:'Mother of Coins',
    desc:`This card is also know by the name the Queen of Spades, Coins, or Pentacles. The Mother card represents Binah (Understanding), the third Sephira, in the suit of Earth. 
    Binah, called the Great Mother, sits atop the left side of the Tree of Life, the Receptive, Passive, and “Female” side. The Mother of Coins is the feminine, receptive complement to the Father of Coins. (In no way do I advocate strict male/female relationships in society, and neither did Crowley. These titles represent natural forces. For every gift there is an implied reception.) 
    Binah is also known as the Great Sea, and she is ruled by the planet Saturn. There is some resonance between this card and the Three of Coins, The Lord of Work.
    Yod represented the active element of Fire. Heh represents the receptive element of Water. She receives, ferments, and transmits the original energy of the Yod, the Father of Coins. The Mother of Coins represents the watery part of Earth: the function of Earth as Mother, and Fields, as quiet, spiritualized bearers of vegetable and animal life. 
    In the I Ching, the watery part of Earth is represented by the 31st Hexagram Hsien, Influence, Wooing.
    The Mother of Earth rules the Zodiac in transition from Sagittarius to Capricorn. Any person who is born with their Sun or Ascendent in the last third of Sagittarius or the first two thirds of Capricorn is ruled by the Mother of Coins. 
    The person signified by this card should possess “the finest of the quieter qualities.” They are intuitive, unassuming, quiet, ambitious, hardworking, practical, sensible, domesticated, kind, affectionate, and possessing a great heart, if not great intelligence.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5aae71c10be188eb1765/1549753020211/mother+of+earth.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Air of Earth',
    name:'Son of Coins',
    desc:`This card is also variously known as the Jack of Diamonds as well as the Prince or Knight of Pentacles. 
    Representing the Vau of Tetragrammaton, the Son corresponds with Tipareth (Beauty), the sixth Sephira. As the third letter of the Name, the Son also corresponds with the third element, the element of Air. 
    The Son of Coins represents the airy part of Earth, which Crowley describes as “the florescence and fructification of that element” and as vegetation that sustains the Spirit. The airy part of Earth is also represented by the Plains, steadily bearing life.
    In the I Ching, the airy part of Earth is described by the 53rd Hexagram Chien, Development, Gradual Progress.
    Tipareth symbolizes not only the Son, but the Sun, as well. There is some resonance between the Son of Coins and the Six of Coins, The Lord of Success.
    The Son of Coins rules the Zodiac in the transition from Aries to the Taurus. Anyone born with their Sun or Ascendent in the last third of Aries or the first two thirds of Taurus is ruled by the Son of Earth.
    The person signified by the Son card is imperturbable, ingenious, energetic, competent, thoughtful, cautious, and trustworthy. He is a capable manager, a persevering and capable worker, a seeker of new uses for common things, and one who adapts his circumstances to his purposes in a slow, steady, well-thought out plan. Often lacking in emotion, he seems insensitive. He is slow to anger and even slower to placate. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5911e4966be7f757c0c0/1549752612844/son+of+earth.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Earth of Earth',
    name:'Daughter of Coins',
    desc:`The Daughter of Coins is also known as the Princess or Page of Coins, Disks, or Pentacles. In playing cards, she has no equivalent. This card, like the Mother, is a strongly feminine card. The Daughters’ purpose is to differentiate source Energy, to gather it, and to transmit it to the Aces of their element. She attracts a spirit to form a body. They are placed so that “a refined matter may attract its like, and the spiritual forces may not lose themselves in the void”.
    As the final letter in the Name, the Final Heh has a strong affinity to the first letter, Yod. In fact, the relationships between these cards are so strong that each implies the other. Once the cycle is complete, it is renewed. Heh occupies Malkuth (Kingdom), which is the tenth and bottom-most Sephira (Emanation) and represents Earth and the Earthly Plane. There is some resonance between the Daughter of Coins and the Ten of Coins, The Lord of Wealth.
    The Daughter is the twin of the Son. She is the final manifestation of Earth, and she represents the earthy part of Earth. She is the last of the Court Cards, and as such she is “on the brink of transfiguration.” 
    In the I Ching, the earthy part of Earth is described by the 52nd Hexagram Kên, Keeping Still, Mountain.
    Although they have no correlation with the Zodiac, the Daughters rule the sky over the Earth in quadrants moving eastward from the Great Pyramid. The Daughter of Earth rules the quadrant of the Earth covered by Europe and Africa.
    The person signified by this card is “Womanhood in its ultimate projection. She contains all the characteristics of woman, and it would depend entirely upon the influences to which she is subjected whether one or another becomes manifest”. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f57c50d929794cf4f7644/1549752458168/daughter+of+earth.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Fire of Fire',
    name:'Father of Wands',
    desc:`This card is most commonly known at the King of Clubs or the Knight of Wands, depending on which deck you play. 
    The Father cards correspond with the second Sephira, Chokmah (Wisdom). It might seem logical that the first onrush of an element’s Energy correspond with Kether (The Crown), the first and topmost Sephira on the Tree of Life, but Kether represents the Source, and it is truly indescribable. Until it reaches Chokmah, the Energy hasn’t acquired any “fireness” and therefore remains unknowable. 
    Chokmah sits atop the right side of the Tree, the Active, “Male” side, and Chokmah is ruled by Neptune. There is some resonance between this card and the Two of Wands, The Lord of Dominion.
    As the first letter of the Unpronouncable Name, Yod, the Father represents the element of Fire. Hence, the Father of Wands represents the fiery part of Fire: Lightning, with its swift onset. 
    In the I Ching, the fiery part of Fire is described by the 51st Hexagram, Chên, The Arousing, Shock, Thunder. 
    The Father of Wands rules the Zodiac in the transition from the sign of Scorpio to Sagittarius. Any person who is born with their Sun or their Ascendent in the last third of Scorpio or the first two thirds of Sagittarius is ruled by the Father of Fire.
    The person signified by this card is active, generous, and fierce, but impetuous, prideful, impulsive, swift and unpredictable. “He is ... ill-fitted to carry on his action; he has no means of modifying it according to circumstances. If he fails in his first effort, he has no resource.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f59a69b747a284074bef4/1549752770542/father+of+fire.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Water of Fire',
    name:'Mother of Wands',
    desc:`This card is also known as the Queen of Clubs and the Queen of Wands. The Mother cards correspond to Binah (Understanding), the third Sephira. 
    Binah, called the Great Mother, sits atop the left side of the Tree of Life, the Receptive, Passive, and “Female” side. The Mother of Wands is the feminine, receptive complement to the Father of Wands. (In no way do I advocate strictly male/female relationships in society, and neither did Crowley. These titles represent natural forces. For every gift there is an implied reception.) 
    Binah is also the Great Sea, and she is ruled by the planet Saturn. There is some resonance between this card and the Three of Wands, The Lord of Virtue.
    Yod represented the active element of Fire. Here, Heh represents the receptive element of Water. She receives, ferments, and transmits the original energy of the Yod. The Mother of Wands is the watery part of Fire: its fluidity and color and is attributed to the Rainbow, as the “fading spiritualized reflection of the Image”. 
    In the I Ching, the watery part of Fire is represented by the 17th Hexagram Sui, Following.
    The Mother of Wands rules the Zodiac in the transition from the sign of Pisces to Aries. Any person born with their Sun or Ascendent in the last third of Pisces or the first two thirds of Aries is ruled by the Mother of Fire.
    The person signified by this card is kind, generous, adaptable, persistently energetic, calmly authoritative, and immensely friendly and loving. Alternately, she could be self-complacent, easily deceived, broody, quick to take offense or revenge without justification.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f59ccee6eb02f5340c564/1549752791423/mother+of+fire.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Air of Fire',
    name:'Son of Wands',
    desc:`This card is also variously known as the Prince of Wands, the Knight of Wands, and the Jack of Clubs. 
    Representing the Vau of Tetragrammaton, the Son corresponds with Tiphareth (Beauty), the sixth Sephira. As the third letter of the Name, Vau corresponds with the third element, Air.
    The Son of Wands represents the airy part of Fire: Fire’s faculty of expanding and volatizing, and the Sun as a source of steady energy. 
    In the I Ching, this card is represented by the 42nd Hexagram I, Increase.
    Tiphareth symbolizes not only the Son, but the Sun, as well. There is some resonance between this card and the Six of Wands, The Lord of Victory. 
    The Son of Wands rules the Zodiac in the transition from Cancer to Leo. Anyone born with their Sun or Ascendent in the last third of Cancer or the first two thirds of Leo is ruled by the Son of Fire.
    The person signified by this card is swift and strong, but may be impulsive, easily influenced, and indecisive. They usually win in the long run due to perseverence and an enormous capacity for work without lust of result. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f59e1e4966be7f757c92b/1549752826497/son+of+fire.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Earth of Fire',
    name:'Daughter of Wands',
    desc:`This card is commonly known as the Princess or (as a masculated) Page of Wands. She has no equivalent in decks of playing cards. Like the Mother, this is a strongly Feminine card. The Daughters’ purpose is to differentiate source Energy, to gather it, and to transmit it to the Aces of their element. She attracts a spirit to form a body. They are placed so that “a refined matter may attract its like, and the spiritual forces may not lose themselves in the void”.
    As the final letter in the Name, the Final Heh has a strong affinity to the first letter, Yod. In fact, the relationships between these cards are so strong that each implies the other. Once the cycle is complete, it is renewed. Heh occupies Malkuth (Kingdom), which is the tenth and bottom-most Sephira and represents Earth and the Earthly Plane. There is some resonance between the Daughter of Wands and the Ten of Wands, The Lord of Oppression.
    The Daughter is the twin of the Son. She is the final manifestation of Fire, and she represents the earthy part of Fire: the fuel as well as “the irresistable chemical attraction of the combustible substance”. 
    In the I Ching, the earthy part of Fire is described by the 27th Hexagram I, The Corners of the Mouth, Providing Nourishment.
    Although they have no correlation with the Zodiac, the Daughters rule the sky over the Earth in quadrants moving eastward from the Great Pyramid. The first, the Daughter of Wands, rules the Heavens over most of Asia and India. 
    The Daughters also represent certain types of “elemental” human beings whom “we recognize by their lack of all sense of responsibility, whose moral qualities seem to lack ‘bite’”. Those signified by this card are brilliant, daring, ambitious, and energetic. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f593d71c10be188eb08a9/1549752655440/daughter+of+fire.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Fire of Water',
    name:'Father of Cups',
    desc:`This card is most commonly known at the King of Hearts or the Knight of Cups. The Father cards correspond with the second Sephira (Emanation), Chokmah (Wisdom). Chokmah is ruled by Neptune. There is some resonance between this card and the Two of Cups, The Lord of Love. 
    Chokmah sits atop the right side of the Tree, the Active side, which has a “Maleness”. It might seem logical that the first onrush Elemental Energy correspond with Kether (The Crown), the first Sephira, but Kether is truly indescribable. Until the Energy reaches Chokmah, the Energy hasn’t acquired any “Water-ness”. 
    Yod is the first letter of the Unpronounable Name, and it represents both the Father as well as the element of Fire. Hence the Father of Water represents the fiery part of Water: the rapid onset of springs and showers, as well as water’s properties of solution, brilliance, and fluorescence. 
    In the I Ching, the fiery part of Water is described by the 54th Hexagram Kuei Mei, The Marrying Maiden.
    The Father of Cups rules the Zodiac in transition from Aquarius to Pisces. Any person with their Sun or Ascendent in the last third of Aquarius or the first two thirds of Pisces is ruled by the Father of Water.
    The person signified by the Father of Cups is graceful and passively amiable. They are “exceedingly sensitive to external influence” but are essentially innocent and pure. They respond to attraction quickly and enthusiasticly but not enduringly. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5a27971a1829e8f2a90f/1549752882032/father+of+water.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Water of Water',
    name:'Mother of Cups',
    desc:`This card is also know by the name the Queen of Cups or the Queen of Hearts. The Mother cards represent Binah (Understanding), the third Sephira (Emanation). 
    Binah, called the Great Mother, sits atop the left side of the Tree of Life, the Receptive, Passive, and “Female” side. The Mother of Cups is the feminine, receptive complement to the Father of Cups. (In no way do I advocate strict male/female relationships in society, and neither did Crowley. These titles represent natural forces. For every gift there is an implied reception.) 
    Binah is also the Great Sea, and she is ruled by the planet Saturn. There is some resonance between the Mother of Cups and the Three of Cups, The Lord of Abundance.
    Yod represented the active element of Fire. Here, Heh represents the receptive element of Water. She receives, ferments, and transmits the original energy of the Yod. The Mother of Cups represents the watery part of Water: its powers of reception and reflection. Crowley states that “to see the Truth of her is hardly possible, for she reflects the nature of the observer in great perfection.” 
    In the I Ching, the watery part of Water is represented by the 58th Hexagram Tui, The Joyous, Lake.
    The Mother of Cups rules the Zodiac in transition from Gemini to Cancer. Anyone born with their Sun or Ascendent in the last third of Gemini or the first two thirds of Cancer is ruled by the Mother of Water.
    The person signified by the Mother of Cups is dreamy, tranquil, and able to receive and transmit without being affected.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5a3e085229b582bcaeb6/1549752912223/mother+of+water.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Air of Water',
    name:'Son of Cups',
    desc:`This card is commonly known as the Jack of Hearts as well as the Prince or Knight of Cups.
    Representing the Vau of Tetragrammaton, the Son corresponds with Tipareth (Beauty), the sixth Sephira (Emanation). As the third letter of the Name, the Son also corresponds with the third element, the element of Air. 
    The Son of Cups represents the airy part of Water: its elasticity, volatility, and equilibrium, as well as steam energy, and the Sea as a steady force of putrefaction. 
    In the I Ching, the airy part of Water is represented by the 61st Hexagram, Chung Fu, a Big Li, Inner Truth. The Hexagram evokes the trigram for Fire, the Chinese character for the Sun (interestingly enough), and the Geomantic figure of Carcer, Saturn in Capricorn.
    Tipareth symbolizes not only the Son, but the Sun, as well. There is some resonance between this card and the Six of Cups, The Lord of Pleasure. 
    The Son rules the Zodiac in the transition from Libra to Scorpio. Anyone born with their Sun or Ascendent in the last third of Libra or the first two thirds of Scorpio is ruled by the Son of Water.
    The person represented by this card possesses characteristics of subtlety, secret violence, and craft. They are calm on the surface, but underneath are raging currents of passion. They are ruthless, capable of immense power, and without conscience. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5a5ae2c483879c70f49f/1549752931159/son+of+water.jpg?format=500w',
    facing: 0,
  },
  {
    id:'Earth of Water',
    name:'Daughter of Cups',
    desc:`The Daughter of Cups is commonly known as the Princess or Page of Cups. She has no equivalent in decks of playing cards. Like the Mother, this is a strongly Feminine card. The Daughters’ purpose is to differentiate source Energy, to gather it, and to transmit it to the Aces of their element. She attracts a spirit to form a body. They are placed so that “a refined matter may attract its like, and the spiritual forces may not lose themselves in the void”.
    As the final letter in the Name, the Final Heh has a strong affinity to the first letter, Yod. In fact, the relationships between these cards are so strong that each implies the other. Once the cycle is complete, it is renewed. Heh occupies Malkuth (Kingdom), which is the tenth and bottom-most Sephira (Emanation) and represents Earth and the Earthly Plane. There is some resonance between the Daughter of Cups  and the Ten of Cups, The Lord of Satiety.
    The Daughter is the twin of the Son. She is the final manifestation of Water, and she represents the earthy part of Water: its power of crystallization, its ability its support life, and its service as basis for chemical combination.
    In the I Ching, the earthy part of Water is represented by the 41st Hexagram Sun, Decrease.
    Although they have no correlation with the Zodiac, the Daughters rule the sky over the Earth in quadrants moving eastward from the Great Pyramid. The Daughter of Cups rules over the Pacific Rim. 
    The Daughters also represent certain types of “elemental” human beings whom “we recognize by their lack of all sense of responsibility, whose moral qualities seem to lack ‘bite’”. Those signified by this card are gracious, sweet, voluptuous, gentle, kind, and tender. “Silently and effortlessly she goes about her work.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5a088165f527b771cb5d/1549752863148/daughter+of+water.jpg?format=500w',
    facing: 0,
  },
  {
    id:'1 of Earth',
    name:'Root of the Powers of Earth',
    desc:`The Ace of Swords represents Kether (The Crown), the first Sephira, in the Suit of Air.  
    Once the current of Energy has passed down the Tree through the three planes of Atziluth, Briah, and Yetzirah, the planes of Fire, Water, and Air, it enters the fourth plane of Earth. The Formative energy of Yetzirah is received by Assiah, the Material plane. The seed of the Kether of Earth is within the Malkuth of Air.
    The Kether of Air is closely related to the Malkuth of Water, as one issues from the other (fig. 6). The Ace does not represent the element Earth itself, only the seed of Earth.
    The Ace is called The Root of the Powers of Earth. It is the final Heh in Tetragrammaton, and it’s a composite element created from the union of Fire and Water, like the Ace of Swords. This card is the twin sister and the feminine complement to the Ace of Swords, who represents the Son, Vau of Tetragrammaton. The final Heh represtnts the Daughter, and although she is the final letter in the Name, she has the latent power to reawaken the Yod, the All-Father, the first letter in the Name, and thus begin the cycle again.
    The importance of this card cannot be understated. In the previous Aeon, let’s call it the Age of the Fish and the Father, the concept of the Earth was seen as a passive, immobile, dead, evil element. In the new Aeon, the Age of the Child, the Earth is restored to a living, whirling ball of energy, as we know every star, every planet is a whirling sphere. The color for Earth in the New Aeon is the green of spring, not black.
    The Ace and Princess of Coins rule the quadrant of the globe over Europe and Africa.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5b44eb39311832f0fd58/1549753317012/1.ace+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'2 of Earth',
    name:'Change',
    desc:`The Deuce of Coins represents Chokmah (Wisdom), the second Sephira, in the suit of Earth. It shows the type of Energy appropriate to Two, in its most fixed form. 
    Again, the 2 is really the 1, the first manifestation from the Root. As the first manifestation in the suit of Earth (Kether is unknowable, and the Ace is only the seed of the element), the Two is the truest and highest manifestation of the element. Earth is the most stable element, and the at the heart of that stability is Change. This card is called The Lord of Change, and he is the male compliment to The Lord of Work, the Three of Coins. 
    Chokmah is attributed to the planet Neptune. There is some resonance between this card and the Father of Coins, and the Yod of Tetragrammaton.
    Astrologically, this card is attributed to Jupiter in Capricorn. In old times it was known as the Lord of Harmonious Change.
    “This suit being of Earth, there is a connection with the Princesses.... Earth is the throne of Spirit”.
    In respect to the harmonious interplay of the Four Elements, this card may be considered a picture of the complete manifested Universe.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5b990d929794cf4f9ab7/1549753257394/2.deuce+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'3 of Earth',
    name:'Work',
    desc:`The Three of Coins represents the third Sephira, the Great Mother, Binah (Understanding), in the suit of Earth. 
    This card is called The Lord of Work, and she is the female complement to The Lord of Change, the Two of Coins. With the Ace, they complete the upward-pointing Supernal Triad, the top-most triangle on The Tree of Life.
    Binah is attributed to the planet Saturn, the God of Time, and she represents the Great Mother, the Sea, and the primary Heh of Tetragrammaton. There is some resonance between this card and The Mother of Coins.
    Astrologically, this card is attributed to Mars in Capricorn. Mars is exalted in Capricorn, and his energy is constructive like that of the builder or engineer. This card “exhibits the result of the idea of Earth, of the crystallization of forces”, the “material establishment of the idea of the Universe,” such as the creation of the triplicities, e.g.: Mercury, Sulfur, and Salt; Sattvas, Rajas, and Tamas; Aleph, Shin, and Mem; Air, Fire, and Water.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5bede4966be7f757dc12/1549753347903/3.three+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'4 of Earth',
    name:'Power',
    desc:`The Four of Coins represents the fourth Sephira, Chesed (Mercy), in the suit of Earth. 
    Chesed is the first Sephira below the Abyss, and it is therefore associated with Jupiter or the Demiurge. Chesed shows the establishment of the Universe below the Abyss. The Four represents the establishment of Law and Order. In the suit of Earth, this can be interpreted literally. In the center of a spinning wheel, there is a theoretical center that does not spin. This card derives its strength from that point.
    Astrologically, this card is attributed to Sun in Capricorn. Since the Winter Solstice is in Capricorn, Capricorn symbolizes the rebirth of the Sun.
    In the I Ching, Sun in Capricorn is represented by the second hexagram, K’un, The Receptive, Big Earth, the female principle.
    “The card is called Power. It is the power which dominates and stabilizes everything, but manages its affairs more by negotiation, by pacific methods, than by any assertion of itself. It is Law, the Constitution, with no aggressive element”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c187817f71b5bdc5788/1549753382333/4.four+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'5 of Earth',
    name:'Worry',
    desc:`The Five of Coins is called The Lord of Worry. It represents the fifth Sephira, Geburah (Strength), in the suit of Earth. 
    Geburah is attributed to the planet Mars, which is often associated with disturbance. The Fives represent the idea of motion introduced to that of matter, indicating a disruption of the previously stable system. 
    Astrologically, this card is attributed to Mercury in Taurus, two opposing energies, whose relationship here embodies Intelligence applied to Labor. Crowley says the meaning of this card, Worry, is akin to the meaning of the word when we say “dogs worry sheep”, i.e. to strangle.
    Although the Fives relate to Disorder , Disruption, and Revolution, the affect is softer in the suit of Coins. The Coins are not dead and flat. In the New Age, the Coins are are spinning and whirling, as we now recognize all matter to behave, and “their revolution serves to stabilize them. There is no action... that can affect the issue.” The effect is one of intense strain; yet long-continued inaction is implied, as well.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c304e17b65729bda971/1549753401733/5.five+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'6 of Earth',
    name:'Success',
    desc:`The Six of Coins is named The Lord of Success. The Six of Coins represents Tiphareth (Beauty), the sixth Sephira, in the suit of Earth. 
    As Tiphareth is balanced both vertically and horizontally on the Tree of Life, Tiphareth represents the most balanced form of each element. 
    In the planetary system, Tiphareth is attributed to the Sun. It has the stabilizing energies of the Moon and Earth below it (fig. 3). 
    In Tetragrammaton, Tiphareth represents Vau, the Son with Crown above (fig. 4). Tiphareth is the only Sephira below the Abyss with direct communication with Kether. In fact, the Sixes receive energy from all five Sephira above. 
    The Six is the product and the result of the Lords of Power and Worry, the Four and the Five of Coins. It completes the downward pointing Ethical Triangle, the seat of our consciousness, and directs that energy toward Yesod, the Moon. 
    Astrologically, this card represents the Moon in Taurus. The Moon being, in this case, representative of the increase toward perfection and especially of the transient nature of that condition. Remember that all success is temporary. Read 1001 Arabian Nights to see some examples of this.
    The two Trump cards, The Lovers, and The High Priestess strongly influence the Sixes. There is some resonance between this card and the Son of Coins.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c424e17b65729bda9e2/1549753436446/6.six+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'7 of Earth',
    name:'Failure',
    desc:`The Seven of Coins is named The Lord of Failure, and it represents the seventh Sephira, Netzach (Victory), in the suit of Earth.
    The departure from the perfection and equilibrium of the Six has led to unbalance.
    Netzach is attributed to the planet Venus, who is attributed to both Air and Earth. In the suit of Coins, her nature is predominantly Earthy, heavy, and weighed down. Astrologically, this card represents Saturn in Taurus. The God of Time is a heavy weight upon the slow ox, a situation unfavorable to Venus. “There is no effort here; not even dream”. The suit of Earth, Coins, Disks, etc., is completely passive, and this card represents utter failure and abandoned labor.
    The Seven “represents the degeneration of the element. Its utmost weakness is exposed in every case.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c66f9619ad3547054c1/1549753456100/7.seven+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'8 of Earth',
    name:'Prudence',
    desc:`The Eight of Coins is named The Lord of Prudence. It represents the eighth Sephira, Hod (Splendor), in the suit of Earth. 
    The current of energy is still unbalanced but on the opposite side of the Tree from the Seven, as if overcompensating for its previous error. 
    Hod is attributed to the planet Mercury. Astrologically, the Eight of Coins aligns with the Sun in Virgo. Mercury rules and is exalted by the sign of Virgo (fig. 2). Sun in Virgo “signifies intelligence lovingly applied to material matters.”.
    In the I Ching, Sun in Virgo corresponds to the 33rd Hexagram, Tun, Retreat, Big Air. Its meaning is akin to retiring. The Moon retires from her manifestation back to her conjunction with the Sun, similar to when, in Virgo, the Energy of the Sun withdraws into the fallow Earth. In this card, there is very much the idea of a seed planted. All there is to do is wait for a rainy day. In material matters, “especially those of money, there is a sort of strength in doing nothing at all.”
    This card corresponds to the Geomantic figure Populus.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c7a971a1829e8f2be9f/1549753480164/8.eight+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'9 of Earth',
    name:'Gain',
    desc:`The Nine of Coins is named The Lord of Gain, and it represents the ninth Sephira, Yesod (Foundation), in the suit of Earth. 
    Back on the middle pillar, the Energy is again in balance and fully developed. This takes place far down the tree in the Formative World.
    Reflecting the light of the Sun, the Moon is its mirror. The Nine receives energy directly down the middle pillar from the Six of Coins, the Lord of Success, as well as from the Seven and Eight, with whom Yesod forms the bottommost point of the Astral Triangle. Yesod is where the Earthy Energy crystalizes as it is directed toward the Earth.
    Yesod forms the bottom-most point of the Astral Triangle. All of Energy is channeled through Yesod, who becomes “the seat of the great crystallization of Energy”.
    As the fullest Idea of the force represented by Coins, Disks, Pentacles, et al., this card is “too dull to care; it reckons up its winnings”, and “purrs with satisfaction at having harvested what it sowed”. There is a sense that the harvest is the result of Work in accordance with Will, and that is all is for the best.
    Yesod is attributed to the Moon. Astrologically, this card is attributed to Venus in Virgo, a lucky combination. This card is aptly named. Gain represents good luck in and good management of material affairs, good favor, and popularity. Crowley says the Nine can be considered as the best that can be obtained. `, 
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5c97e2c483879c710b26/1549753497367/9.nine+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'10 of Earth',
    name:'Wealth',
    desc:`The Ten of Coins is named The Lord of Wealth. It represents the tenth Sephira, Malkuth (Kingdom), in the suit of Earth. Malkuth is attributed to the Earth and the Earthly Plane. 
    The tenth Sephira represents the final solidification of the original Energy. Crowley says this card is to the other thirty-five small cards what the Universe is to the rest of the Trump cards.
    Astrologically, this card is attributed to Mercury in Virgo. It implies that acquired wealth must be spent or else it becomes inert and lost. Remember that these Coins are spinning, as all matter on the Earthly Plane is made of whirling energy. Wealth needs to keep moving or it ceases to be. Mercury in Virgo is attributed to the Geomantic figure of Conjunctio, the mating of the active and the receptive.
    The Lord of Wealth represents the Magical Formula and the cycle of regeneration. “Here again is written this constantly recurring doctrine, that as soon as one gets to the bottom one finds oneself at the top”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5caf6e9a7f5815fa55c8/1549753535233/10.ten+of+coins.jpg?format=500w',
    facing: 0,
  },
  {
    id:'1 of Water',
    name:'Root of the Powers of Water',
    desc:`The Ace of Cups represents Kether (The Crown), the first Sephira (Emanation), in the Suit of Water.  
    The Root of the Powers of Water is the feminine complement to the Ace of Wands. Accordingly, it has strong Lunar/Yoni associations. The watery world of Creation, Briah, has received the fiery, archetypal energy of Atziluth. Now, the energy must be fermented and reissued. 
    The Kether of Water is closely related to the Malkuth of Fire, as one issues from the other (fig. 6). The Ace is not the element itself, but the seed of that element.
    Although the symbol is that of Water, it could as easily represent Wine or Blood. This is the essential form of the Holy Grail. 
    There is an affinity between this card and the Mother of Cups. In some respects, this card is the primary Heh of Tetragrammaton. As such, it is associated with the second Sephiroth, Binah (Understanding), the Great Mother, who is in turn associated with the planet Saturn and the Sea. 
    The Ace and Princess of Cups rule the quadrant of the Heavens over the Pacific.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5ccde2c483879c710d39/1549753565280/1.ace+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'2 of Water',
    name:'Love',
    desc:`The Deuce of Cups represents Chokmah (Wisdom), the second Sephira (Emanation), in the suit of Water. 
    The Two of Cups is named the Lord of Love. The full name of this card is the Lord of Love under Will. He is the male complement to the Three of Cups, the feminine Lord of Abundance. 
    Chokmah is attributed to the planet Neptune. There is some resonance between this card and the Father of Cups.
    As the first manifestation in the suit of Water (the Ace is only the seed of the element), the Two is the truest and highest manifestation of the element. In the suit of Water, it refers to Love, “which recovers unity from dividuality by mutual annihilation”, and refers to the interplay of the male and the female, “interpreted in the largest sense”.
    Astrologically, this card is attributed to Venus, the planet of Love, in Cancer, an Astrological sign associated with a lot of feeling.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5dc224a6947f23ec98c1/1549753821462/2.deuce+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'3 of Water',
    name:'Abundance',
    desc:`The Three of Cups represents the third Sephira (Emanation), Binah (Understanding), in the suit of Water. 
    Binah represents the Great Sea, the Great Mother, and the Primary Heh of Tetragrammaton. In the suit of Water, she represents the Idea of love, fertilized, and the birth of something new. 
     She completes the Supernal Triad, the topmost triangle on the Tree of Life, and this represents the “fulfullment of the Will of Love in abounding joy.” 
    This card is called the Lord of Abundance. She is the female complement to the masculine Lord of Love, the Two of Cups. Abundance represents the spiritual basis of Fertility, and so this card relates to the myths of Demeter and Persephone.
    Binah is attributed to the planet Saturn, and this card has an affinity with the Mother of Cups and the Ace of Cups.
     Astrologically, this card is attributed to Mercury in Cancer. Mercury comes bearing messages from the Gods to Cancer, the most receptive of the signs.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5ce7971a1829e8f2c36c/1549753583746/3.three+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'4 of Water',
    name:'Luxury',
    desc:`The Four of Cups represents Chesed (Mercy) in the suit of Water. Chesed is the fourth Sephira (Emanation) and the first Sephira below the Abyss. It is therefore associated with Jupiter or the Demiurge and the Rule of Law.
    As Binah completed the Supernal Triangle, an upward-pointing figure, so Chesed begins the Ethical Triangle, a downward-pointing figure representing the living human soul. Separating the two is the Abyss, a term used to divide the unknowable from that which is even conceivable by the human mind. Crossing the Abyss implies a loss of purity of the original element. Pleasure has been attained, but something was lost.
    Astrologically, this card is attributed to Moon in Cancer, the sign it rules. This is a very “moon-y” card in general. In Geomancy it corresponds to Via and Populus, which are related to the waxing and waning of the moon.
    Four is a stable, static, and somewhat stagnant number, but the stability of the four implies the disorder of the five. Disruption is to come! `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5de6b208fc722ac9a796/1549754962405/4.four+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'5 of Water',
    name:'Disappointment',
    desc:`The Five of Cups represents the fifth Sephira (Emanation), Geburah (Strength), in the suit of Water. 
    The Five shows the idea of motion introduced to that of matter, indicating a disruption of the previously stable system. The Four is the crystallization of the Will, the Five sets it in motion.
    The Sephira of Geburah is attributed to the planet Mars. The fiery influence of Mars applied to the suit of Water suggests unexpected disturbance in a “time of ease.”
    Astrologically, this card is attributed to Mars in Scorpio, his own house (fig. 2). In Geomancy, Mars in Scorpio is attributed to Rubeus, an evil and unlucky omen. While Mars is often a destructive force and Scorpio suggests putrefaction, this powerful male influence does not “show actual decay, only the beginning of destruction; hence, the anticipated pleasure is frustrated.”
    This card represents “the triumph of matter over spirit.”`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5d1d53450a883a1b4770/1549754962708/5.five+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'6 of Water',
    name:'Pleasure',
    desc:`The Six of Cups represents the sixth Sephira, Tiphareth (Beauty), in the suit of Water. 
    As Tiphareth is balanced both vertically and horizontally on the Tree of Life, Tiphareth represents the most harmonious and balanced form of each element. 
    In the planetary system, Tiphareth is attributed to the Sun. It has the stabilizing energies of the Moon and Earth below (fig. 3). The card is ruled by the Sun in Scorpio and describes the putrefaction process of such and the effect of Sun on Water, the basis of all life.
    Tiphareth also corresponds to Vau, the Son, of Tetragrammaton, with the Crown above (fig. 4). He is the only Sephira below the Abyss that receives energy directly from Kether (the Crown). In fact, he receives energy from all five Sephira above.
    The Six is the product and the result of the Lords of Luxury and Disappointment, the Four and the Five. It completes the downward pointing Ethical Triangle and directs that energy toward Yesod, the Moon. 
    Crowley stresses the sexual nature of this card, specifically related to the High Priest, ceremonially purified, about to present his offering. “This is pre-eminently a fertile card,” Crowley states, “one of the best in the pack”. Foreign to the idea of the card is the gratification of natural or artificial desires, yet it does represent, emphatically, the fulfillment of the sexual Will.
    In the I Ching, this card is equivalent to the 20th Hexagram, Kuan, Contemplation, View, Big Earth.
    The two Trump cards, The Lovers, and The High Priestess strongly influence the Sixes. There is some resonance between this card and the Son of Cups.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5e3f104c7bb62a0ca0f2/1549753921567/6.six+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'7 of Water',
    name:'Debauch',
    desc:`The Seven of Cups is named the Lord of Debauch. The Seven of Cups represents the seventh Sephira, Netzach (Victory), in the suit of Water. As Netzach is attributed to the airy planet Venus, her presence is antipathic to water.
    In addition, the current of energy has left the balance and equilibrium of the Six. The departure from perfection has led to unbalance so low on the Tree that it implies false pleasure and addiction. “This card is one of the worst ideas one can have.”
    This card is “a wholesome reminder of the fatal ease with which a Sacrament may be profaned and prostituted” , where “the holiest mysteries of Nature become the obscene and shameful secrets of a guilty conscience”.
    Astrologically, this card is attributed to Venus in Scorpio. The double influence of Venus is unfortunate. The passive, self-sacrificing nature of Venus is easily consumed by the watery depths of Scorpio.
    “There is something almost suicidal in this card. It is particularly bad because there is nothing whatever to balance it.”
    The Seven “represents the degeneration of the element. Its utmost weakness is exposed in every case.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5e84e2c483879c711c17/1549754709259/7.seven+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'8 of Water',
    name:'Indolence',
    desc:`The Eight of Cups is named the Lord of Indolence, and it represents Hod (Splendor), the eighth Sephira (Emanation), in the suit of Water. The current of energy is still unbalanced but on the opposite side of the Tree from the Seven, as if overcompensating for its previous error. 
    Hod is attributed to the planet Mercury, but the reference to Saturn in Pisces overpowers this influence. “Pisces is calm but stagnant water; and Saturn deadens it completely.”
    Crowley says, “This card is the very apex of unpleasantness. It is ruled by the planet Saturn; time, sorrow have descended upon pleasure, and there is no strength in the element of water which can react against it”. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f61639140b743f63cf49a/1549754962401/8.eight+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'9 of Water',
    name:'Happiness',
    desc:`The Nine of Cups is named The Lord of Happiness. It represents Yesod (Foundation), the ninth Sephira, in the suit of Water. Yesod is attributed to the Moon, and her element is Water, increasing this idea of Water.
    Back on the middle pillar, the current of Energy is again in balance. At the base of the Astral Triangle, and symbolizing the World of Formation, the Energy is now fully developed. The Nine can be considered as the best that can be obtained. 
    Reflecting the light of the Sun, the Moon is its mirror. The Nine receives energy directly down the middle pillar from the Six of Cups, the Lord of Pleasure, as well as from the Seven and Eight, with whom Yesod forms the bottommost point of the Astral Triangle. Yesod is where the Watery Energy crystalizes as it is directed toward the Earth.
    Astrologically, this card is attributed to Jupiter in Pisces. Jupiter in Pisces is good fortune, but “only in the sense of complete satiety. The fullest satisfaction is merely the matrix of a further putrefaction”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f61c7104c7bb62a0cc39c/1549754962684/9.nine+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'10 of Water',
    name:'Satiety',
    desc:`The Ten of Cups is named The Lord of Satiety, and she represents Malkuth (Kingdom), the tenth Sephira, in the suit of Water. Malkuth is attributed to the Earth and the Earthly Plane, Assiah. It represents the Energy manifested and the Work completed. Now, “the work proper to water is complete: and disturbance is due”. “The pursuit of pleasure has been crowned with perfect success, and... having got everything one wanted, one did not want it after all”.
    Astrologically, this card is attributed to Mars in Pisces. Violent and Fiery Mars is a disruptive influence for the peaceful, spiritual waters of Pisces. The waters have become stagnant. This is the natural order of perfection leading to putrefaction.
    Every ending holds the seeds of a new beginning. Having reached the Malkuth of the Watery Briah (fig. 6), this card has a natural corellation with the Kether of Airy Yetzirah, the Ace of Swords,who is named The Root of the Powers of Air. As the Malkuth of Water, this card also has an affinity for the Daughter of Cups and the final Heh of Tetragrammaton.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f61f44192028682d94aeb/1549754962385/10.ten+of+cups.jpg?format=500w',
    facing: 0,
  },
  {
    id:'1 of Air',
    name:'Root of the Powers of Air',
    desc:`The Ace of Swords represents Kether (The Crown), the first Sephira (Emanation), in the Suit of Air.  
    Once the current of Energy has passed down the Tree through the two planes of Atziluth and Briah, the planes of Fire and Water, it enters the third plane of Air. The Creative energy of Briah is received by Yetzirah, the world of Formation and the Astral plane. 
    The Kether of Air is closely related to the Malkuth of Water, as one issues from the other (fig. 6). The Ace does not represent the element Air itself, only the seed of Air.
    The Ace is called The Root of the Powers of Air. He is the masculine complement to the Ace of Coins, The Root of the Powers of Earth. The Ace of Swords represents the Son, the Vau, in Tetragrammaton. Like the Daughter, he is a composite element created from the union of Fire and Water. There is an affinity between this card and the Son of Swords. Issuing as he does from the Mother, Binah, the Root of the Powers of Air feels a strong influence from the Path that connects them, The Lovers, ATU VI.
    The plane of Air is also the plane of Ruach, the intellectual mind. For this reason, Crowley says this card is first “to be apprehended by the normal consciousness of Mankind,” and he equates it to the Word and Logos. 
    Ruach also means Spirit. In many senses, this card is as much about Spirit as it is about Air. The suit of Air is also the suit of Spirit.
    The Ace and Princess of Swords rule the quadrant of the heavens  over the Americas.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6223a4222fa3c7d51d7b/1549754962389/1.ace+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:'2 of Air',
    name:'Peace',
    desc:`The Deuce of Swords represents Chokmah (Wisdom), the second Sephira (Emanation), in the suit of Air. Chokmah is attributed to the planet Neptune. There is some resonance between this card and the Father of Swords.
    This card is called The Lord of Peace, and he is the male compliment to The Lord of Sorrow, the Three of Swords. 
    Astrologically, this card is attributed to Moon in Libra. The Moon represents Change and Libra exemplifies Balance. Again, the cards reaffirm the concept that there is stability in change.
    Herein is the concept that if one thing exists, then so must its opposite. There is also a magical law that if one thing is created, so is its opposite. The Law of the Conservation of Force. The sum total of the infinite energy of the entire Universe is Zero.
    The Two of Swords governs all intellectual manifestations such as reason, thought, and speech. Also, the twos always represent the Word and the Will.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f62b5652deabd42dbf5c4/1549755139601/2.deuce+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:'3 of Air',
    name:'Sorrow',
    desc:`The Three of Swords represents Binah (Understanding), the third Sephira (Emanation), in the suit of Air.
    This card is named the Lord of Sorrow, and she is the female complement to the Lord of Peace, The Two of Swords. Binah stands at the head of the Pillar of Strength, and she completes the Supernal Triad. 
    She represents the Great Sea, the Great Mother, and the Primary Heh of Tetragrammaton. Despite the strong matriarchal energy of this card, in the suit of Air, Binah possesses a strong sense of melancholy.  In the suit of Air, Binah represents the ideas of division and mutability. 
    Astrologically, Binah is attributed to the planet Saturn, and adding to the dark, heavy influence of that planet, this card also is attributed to Saturn in Libra.
    Crowley references the womb of chaos and an “intense lurking passion to create, but its children are monsters.... Secrecy is here, and Perversion”.
    There is an affinity between this card and the Mother of Swords. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6321652deabd42dbf95b/1549755183676/3.three+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:'4 of Air',
    name:'Truce',
    desc:`The Four of Swords represents Chesed (Mercy), the fourth Sephira (Emanation), in the suit of Air. 
    As Binah completed the Supernal Triangle, an upward-pointing figure, so Chesed begins the Ethical Triangle, a downward-pointing figure representing the living human soul. Separating the two is the Abyss, a term used to divide the unknowable from that which is even conceivable by the human mind. Crossing the Abyss implies a loss of purity of the original element. Chesed is the first sephira below the Abyss. It is therefore associated with Jupiter or the Demiurge and the Rule of Law.
    This card represents the authority in the Intellectual world, refuge from mental chaos, the establishment of Dogma and Law, and also of compromise.
    Astrologically, Chesed is attributed to Jupiter, and this card also is attributed to Jupiter in Libra. The double emphasis of the Rule of Law in the suit of Swords gives a sense of military rule or armed peace. 
    As with the other Fours, the stability inherent in the number implies the coming disturbance and upset inherent in the Fives. The process is a “mess, usually represented by foetid stench”, but the Work must be done.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f64eee2c483879c7157b0/1549755632936/4.four+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:'5 of Air',
    name:'Defeat',
    desc:`The Five of Swords represents Geburah (Strength), the fifth Sephira (Emanation), in the suit of Air. 
    Geburah is attributed to the planet Mars, which is often associated with disturbance. The Five shows the idea of motion introduced to that of matter, indicating a disruption of the previously stable system.
    “There has been insufficient power to maintain the armed peace of the Four. The quarrel has actually broken out”.
    Astrologically, this card is attributed to Venus in Aquarius. Venus is the planet of relationships, but Aquarius  prefers a more ideal and intellectual approach.
    “The intellect has become enfeebled by sentiment. This card implies defeat due to pacifism. Treachery also may be implied.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6508ec212d3859c9a975/1549756236157/5.five+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`6 of Air`,
    name:'Science',
    desc:`The Six of Swords is named The Lord of Science, and it represents Tiphareth (Beauty), the sixth Sephira, in the suit of Air. 
    As Tiphareth is balanced both vertically and horizontally on the Tree of Life, Tiphareth represents the most harmonious and balanced form of each element. 
    In the planetary system, Tiphareth is attributed to the Sun. It has the stabilizing energies of the Moon and Earth below it (fig. 3). 
    In Tetragrammaton, Tiphareth represents Vau, the Son with Crown above (fig. 4). Tiphareth is the only Sephira below the Abyss with direct communication with Kether. In fact, he receives energy from all five Sephira above. 
    The Six is the product and the result of the Lords of Truce and Defeat, the Four and the Five of Swords. It completes the downward pointing Ethical Triangle and directs that energy toward Yesod, the Moon. 
    The number Six represents Intellect. In the suit of Swords, the suit representing Air and also Spirit, this card represents celestial energy influencing Man, thus bestowing intelligence and humanity. The idea of Science in its fullest interpretation: the “perfect balance of all mental and moral faculties, hardly won, and almost impossible to hold in an ever-changing world.”
    Astrologically, this card is attributed to Mercury in Aquarius. The previous card’s divisive Martian influence has been changed to favor a harmonious Mercurial intelligence. Intelligence turns from the ideas of division and quarrel and wins success. 
    The two Trump cards, The Lovers, and The High Priestess, strongly influence the Sixes. There is resonance with this card and both the Ace and Son of Swords. `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6523652deabd42dc0c06/1549756236163/6.six+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`7 of Air`,
    name:'Futility',
    desc:`The Seven of Swords is named The Lord of Futility. The Seven of Swords represents the seventh Sephira, Netzach (Victory), in the suit of Air. 
    The departure from the perfection and equilibrium of the Six has led to unbalance. Like the Four of Swords, The Lord of Truce, this card suggests appeasement. Crowley says there is a “vacillation, a wish to compromise, a certain toleration” that will always end in disaster as long as there are forces willing to prey on what is seen as weakness. This card may also represent the many weak overcoming the one strong.
    The Sephira of Netzach is attributed to the planet Venus. Venus is a planet attributed to Air and Earth, yet this far down on The Tree, her influence even here on the Airy plane is weakened. Her Earthly nature is taking predominance.
    Astrologically, this card is attributed to the Moon in Aquarius. This shows the influence of a mutable, watery planet in a passive, Airy sign. There is an emotional detachment that thwarts Venus’ intentions.
    The Seven “represents the degeneration of the element. Its utmost weakness is exposed in every case.” `,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f653b0d929794cf4ff7c6/1549756236166/7.seven+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`8 of Air`,
    name:'Interference',
    desc:`The Eight of Swords is named The Lord of Interference. The Eight of Swords represents the eighth Sephira, Hod (Splendor) in the suit of Air. 
    The current of energy is still unbalanced but on the opposite side of the Tree from the Seven, as if overcompensating for its previous error. 
    Hod is attributed to the planet Mercury. 
    Astrologically, this card is attributed to Jupiter in Gemini, and despite its good intentions, this card symbolizes sheer unforeseen bad luck, the tendency for the best laid schemes o’ mice an’ men to gang aft a-gle, or being good natured when it’s disastrous to be so. A lack of persistence is also implied.
    Crowlely says the name for this card in the old pack is “Shortened Force”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6557c83025b45f5db28c/1549756236180/8.eight+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`9 of Air`,
    name:'Cruelty',
    desc:`The Nine of Swords is named The Lord of Cruelty. The Nine here represents the ninth Sephira, Yesod (Foundation), in the suit of Air. 
    Back on the middle pillar, the energy is again in balance and fully developed. This far down the tree, the pure intellect of the Swords has degraded to heartless passions and unconscious primitive instincts.
    “Consciousness has fallen into the realm of unenlightened reason”.
    Reflecting the light of the Sun, the Moon is its mirror. The Nine receives energy directly down the middle pillar from the Six of Swords, the Lord of Science, as well as from the Seven and Eight, with whom Yesod forms the bottommost point of the Astral Triangle. Yesod is where the Airy Energy crystalizes as it is directed toward the Earth.
    The Sephira of Yesod is attributed to the Moon. Astrologically, The Lord of Cruelty represents Mars in Gemini. Gemini is ruled by Mercury, and the introduction of Mars brings an antogonistic energy. The passive energies of the Moon have little influence.
    The way of dealing with this card is “passive resistance, resignation, and acceptance of martyrdom”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6572e2c483879c715d62/1549756236170/9.nine+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`10 of Air`,
    name:'Ruin',
    desc:`The Ten of Swords is named The Lord of Ruin, and it represents the tenth Sephira, Malkuth (the Kingdom), in the suit of Air. Malkuth is attributed to the Earth and the Earthly Plane, Assiah. The energy has left the Formative World and is on the Material Plane. 
    Malkuth “depends from the other nine Sephiroth, but is not directly in communication with them.” On the plane attributed to the Mind, this means a disconnect from intellect and reason, blind passion, madness.
    Intellect has run its course and devolved into madness and reason divorced from reality. It is the ruin of the Intellect, and even of all mental and moral qualities.
    Astrologically, this card represents the Sun in Gemini.
    In the I Ching, Sun in Gemini is harmonious with the 43rd hexagram Kuai, Break-through, Resoluteness. 
    If one goes on fighting long enough, all ends in destruction. Ruin can never be complete, because once things are bad enough, they start to build up again.
    This card has an affinity for the Daughter of Swords and the final Heh of Tetragrammaton. In addition, this card has a correlation with the Ace of Coins. The energy has reached the Malkuth of Yetzirah, and it must continue to the Kether of Assiah (fig 6.). The seed of one is found within the other. The cycle begins anew.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f65974e17b65729be02ec/1549756236406/10.ten+of+swords.jpg?format=500w',
    facing: 0,
  },
  {
    id:`1 of Fire`,
    name:'Root of the Powers of Fire',
    desc:`The Ace of Wands represents Kether (The Crown), the first Sephira (Emanation), in the Suit of Fire. 
    The Root of the Powers of Fire is related to Yod of Tetragrammaton in the way that Kether is said to be symbolized by only the topmost point of Yod. Considering this, it is important to note that the Ace of Fire is not the element of Fire itself, but the seed of Fire. The Ace of Wands has strong Solar/Phallic/Lingam associations.
    The Root of the Powers of Fire is the first spark at the top of the very first Tree in the very first, fiery Plane, Atziluth. Crowley says, “It is the primordial Energy of the Divine manifesting in Matter at so early a stage that it is not yet definitely formulated as Will.” 
    The Ace of Wands and the Princess of Wands rule the quadrant of the Heavens over Asia.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f65ca652deabd42dc13c5/1549756236422/1.ace+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`2 of Fire`,
    name:'Dominion',
    desc:`The Deuce of Wands represents Chokmah (Wisdom), the second Sephira (Emanation), in the suit of Fire. 
    The Two of Wands is named the Lord of Dominion. He is the male complement to the Three of Wands, the Feminine Lord of Virtue. 
    Chokmah is attributed to the planet Neptune, and there is some resonance between this card and the Father of Wands. 
    Astrologically, this card is attributed to Mars in Aries. The sign of Aries signifies the initial rush of Fire energy, and Mars is a very strong and active planet. This card has a strong Male energy. 
    In Geomancy, this card represents Puer, the Son.
    The Fire suit represents the plane of Atziluth, the realm closest to the Source and to the Divine Presence. The Ace is the initial spark of divine energy, and the Deuce is that spark made manifest.
    This card is a depiction of the ideal Will “independent of any given object”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f65f5fa0d60425b9e1805/1549756236501/2.deuce+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`3 of Fire`,
    name:'Virtue',
    desc:`The Three of Wands represents Binah (Understanding), the third Sephira (Emanation), in the suit of Fire. 
    Binah represents the Great Sea, the Great Mother, as well as the Primary Heh of Tetragrammaton. She represents the Idea, fertilized, and the birth of something new, like the beginning of Spring. Binah is attributed to the planet Saturn, and there is some resonance between this card and Mother of Wands. 
    The Three of Wands is named the Lord of Virtue, and she is the Feminine complement to the Masculine Lord of Dominion. This card represents the establishment of primeval energy. “The Will has been transmitted to the Mother, who conceives, prepares, and gives birth to, its manifestation.” 
    With Kether (Crown) and Chokmah (Wisdom), Binah completes the top-most triangle on the Tree of Life, the Supernal Triad. 
    Astrologically, this card is attributed to the Sun in Aries. The sign of Aries represents the initial onrush of Fire energy, and the Sun is a strong, sustaining force for that energy.
    Furthermore, Virtue has an affinity with the 11th hexagram of the I Ching, T’ai, Peace.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f661c53450a883a1b9aeb/1549756236823/3.three+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`4 of Fire`,
    name:'Completion',
    desc:`The Four of Wands represends Chesed (Mercy), the fourth Sephira (Emanation), in the suit of Fire. Binah completed the Supernal Triad, an upward pointing triangle that symbolizes the unknowable. Chesed begins the Ethical Triad, a downward pointing triangle that symbolizes a concentration of manifesting energy. The two theoretical triangles are separated by the Abyss, the divide between the Divine and the Rational. To put it simply, “The relationship between the number Three and the number Four is extremely complex.” 
    Chesed is the first Sephira below the Abyss, the first to materialize in a form our intellect can grasp. The Four represents solidification, materialization, or manifestation. The Fours are strong cards that form the “dominating influence” on the rest of their suit. Chesed is attrubuted to Jupiter and the Demiurge.
    The Fours represent the Rule of Law and staus quo. “There is no intention to increase the scope of the original Will, and this lack of intention bears in the seeds of disorder.” The progression of the cards is intended to be considered holistically, so that each card is seen in relation to all of the other cards. Although the Four represents a stability, the stability of the Four also implies the coming disorder of the Five.
    The astrological attribution is of Venus in Aries. The sign of Aries represents the initial onrush of Fire energy, while Venus is the gentle planet associated with Love and Feelings.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f678c971a1829e8f32c09/1549756313507/4.four+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`5 of Fire`,
    name:'Strife',
    desc:`The Five of Wands is named the Lord of Strife. The Five of Wands represents Geburah (Strength), the fifth Sephira (Emanation), in the suit of Fire. Geburah is attributed to the planet Mars.
    The introduction of the Five shows the idea of motion coming to the aid of that of matter, indicating a disruption of the previously stable system. The Four is the crystallization of the Will, the Five sets it in motion.
    The astrological attribution is of Saturn in Leo. Leo symbolizes the element of Fire in its strongest and most balanced, and Saturn adds a heaviness and embitters it.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f6646e4966be7f7583d51/1549756236520/5.five+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`6 of Fire`,
    name:'Victory',
    desc:`The Six of Wands is named the Lord of Victory. The energy of the Five has disrupted the stasis of the Four, and Success has been won. The Six of Wands represents Tiphareth (Beauty), the sixth Sephira, in the suit of Fire.
    As Tiphareth is balanced both vertically and horizontally on the Tree, Tiphareth represents the most balanced form of each element. 
    In the planetary system, Tiphareth is attributed to the Sun. It has the stabilizing energies of the Moon and Earth below (fig. 3).
    Tiphareth also corresponds to Vau, the Son, of Tetragrammaton, with the Crown above (fig. 4). He is the only Sephira below the Abyss that receives energy directly from Kether (the Crown). In fact, he receives energy from all five Sephira above.
    The Six is the product and the result of the Lords of Completion and Strife, the Four and the Five. It completes the downward pointing Ethical Triangle and directs that energy toward Yesod, the Moon.
    The Six is the product and the result of the Lords of Completion and Strife, the Four and the Five. It completes the downward pointing Ethical Triangle and directs that energy toward Yesod, the Moon.
    The astrological attribution of this card is of Jupiter in Leo. The sign of Leo represents the element of Fire in its strongest and most balanced form. The planet Jupiter is associated with luck. Perhaps this indicates that any victory requires the heart of a lion... and a little dumb luck. 
    The two Trump cards, The Lovers, and The High Priestess strongly influence the Sixes. There is some resonance between this card and the Son of Wands.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f666171c10be188eb85f0/1549756236657/6.six+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`7 of Fire`,
    name:'Valor',
    desc:`The Seven of Wands is named the Lord of Valor. The Seven of Wands represents the seventh Sephira, Netzach, in the suit of Fire. Netzach (Victory) is attributed to the planet Venus.  
    The astrological attribution of the Lord of Valor is of Mars in Leo. Leo represents Fire in its most balanced form. This has been preserved from the Five and Six, but the power has begun to wane. Mars is a strong force, but not long sustained. 
    The current of Energy has left the balance and equilibrium of the Six, leading to an unbalance so low on the Tree that it “implies a loss of confidence.” In desperation, the energy has become brutal to compensate for weakening strength. A “frantic struggle” to maintain victory is at hand.
    The Seven “represents the degeneration of the element. Its utmost weakness is exposed in every case.”`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f667c4192028682d97743/1549756236669/7.seven+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`8 of Fire`,
    name:'Swiftness',
    desc:`The Eight of Wands is named the Lord of Swiftness, and it represents Hod (Splendor), the eighth Sephira (Emanation), in the suit of Fire. The current of energy is still unbalanced but on the opposite side of the Tree from the Seven, as if overcompensating for its previous error.
    The astrological attribution is of Mercury in Sagittarius. Sagittarius refers to the exalted, ethereal qualities of Fire, and its sublime forms, such as light, the phenomenon of the rainbow, and of electricity. Hod is also attributed to the planet Mercury, giving this card a double attribution to the planet of speech, thought, and communication.
    This card represents high velocity energy, “such as furnishes the master-key to modern mathematical physics”.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f66c38165f527b7724707/1549756236783/8.eight+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`9 of Fire`,
    name:'Strength',
    desc:`The Nine of Wands is named The Lord of Strength. It represents Yesod (Foundation), the ninth Sephira, in the suit of Fire. 
    Yesod is attributed to the Moon. It reflects the light of the the Six, the Sun. It receives energy directly down the middle pillar from the Six of Wands, the Lord of Victory, as well as from the Seven and Eight, with whom Yesod forms the bottom point of the Astral Triangle. Yesod is where the Fiery Energy crystalizes.
    Back on the middle pillar, the current of energy is again in balance and is now fully developed. Crowley says the Nine can be considered as the best that can be obtained. 
    Astrologically, this card is governed by the Moon in Sagittarius. Sagittarius refers to the exalted, ethereal qualities of Fire, and its sublime forms, such as light, the phenomenon of the rainbow, and of electricity. This card, with its double influence of the Moon, represents changing energy, the blinking of matter (is/is not). Constantly, we are reminded that change is stability.`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f66e46e9a7f5815fab90d/1549756236728/9.nine+of+wands.jpg?format=500w',
    facing: 0,
  },
  {
    id:`10 of Fire`,
    name:'Oppression',
    desc:`The Ten of Wands is named the Lord of Oppression, and she refers to Malkuth (Kingdom), the tenth Sephira (Emanation), in the suit of Fire. Malkuth is attributed to the Earth. The energy has left the Formative World and is on the Material Plane. Malkuth “depends from the other nine Sephiroth, but is not directly in communication with them.”
    Having reached the Malkuth of Fiery Atziluth, this card has a natural corellation with the Kether of Watery Briah, the Ace of Cups.(fig. 6) As the Malkuth of Fire, this card also has an affinity for the Daughter of Wands and the final Heh of Tetragrammaton.
     This card is Fire at its most destructive, and it is ruled by Saturn in Sagittarius. Although Sagittarius refers to the exalted, ethereal qualities of Fire, and its sublime forms, such as light, the phenomenon of the rainbow, and of electricity, Saturn has a heavy, dulling effect. The Energy is detached from its spiritual sources, and it lacks the nobility, the authority, and the intelligence of the previous cards. Separated from the rest of the Tree, The Force has become blind, stupid, and cruel.
    “It is a Will which has not understood anything beyond its dull purpose, its 'lust of result’, and will devour itself in the conflagrations it has evoked.”`,
    img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f670beb39311832f16ccc/1549756236782/10.ten+of+wands.jpg?format=500w',
    facing: 0,
  },
] 

module.exports={deck};