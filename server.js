const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config');

const app = express();

app.use(
  cors({
    origin:CLIENT_ORIGIN
  })
);

const tarotDeck ={
  deck: [
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
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    },
    {
      id: '1',
      name: 'The Magus',
      desc: `The second Atu, or Key, is The Magus, who represents the Path from Kether (Crown) to Binah (Understanding). Philosophically, this card precedes Understanding. Quite literally, this card is one of the paths to Understanding, yet it is also above Understanding.
      The Hebrew letter attributed to the second Path is Beth. Beth has the numerical value of 2 and means a House. 
      Given the number 1, The Magus is attributed to the planet and the god Mercury, messenger of the Gods. In the Thoth deck, this card is titled The Magus, but in the text, Crowley names it the Juggler and says the midiaeval French title is “Le Bâteleur”, or The Wand Bearer.Mercury, too, is a wand bearer. 
      This card is the Logos of John, 1:1-3, the Word, and the Will. As the Word, this card counter-balances the Fool, who was Silence, and as the Word, The Magus is the Son, in a sense, and is counterpart to The High Priestess.
      Like The Fool, The Magus is essentially hermaphroditic. The Source Energy proceeding from Kether is undifferentiated until it reaches Binah. There is no female-ness until it is defined withing Binah.
      Their secret title is the Magus of Power.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '2',
      name: 'The High Priestess',
      desc: `This card represents the third Path, the Path from Kether (Crown) to Tiphareth (Beauty). Perfectly balanced on the Tree, her secret title is The Priestess of the Silver Star.
      The High Priestess is attributed to the Hebrew letter Gimel, which means Camel and has the numeric value of 3. Gimel, together with Daleth and Heh, forms what Crowley calls a “Triune Goddess”, three forms showing the Feminine Symbol, Yin: the Virgin, the Wife, and the Crone, respectively.
      The High Priestess is the first card thusfar to descend below the Abyss and the first to differentiate a gender. She is a wholly feminine card. Accordingly, she is attributed to the Moon.
      For those who have experienced Conversation with their Holy Guardian Angel, some describe this Path as the intelligence or the thoughts of the Holy Guardian Angel. 
      In the symbology of Tetragrammaton, this is the Path connecting the Father to the Son.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '3',
      name: 'The Empress',
      desc: `The Empress card is attributed to the fourth Path. One of only three Paths that lie entirely above the Abyss, she completes the Supernal Triangle alternately known as the Crown or the Macroprosopos, The Greater Countenance of God. 
      The fourth Path connects the All-Father, Chokmah, to the Great Mother, Binah, literally uniting Wisdom and Understanding. Her  secret title is The Daughter of the Mighty Ones.
      The Hebrew letter attributed to the fourth Path is Daleth. Daleth has the numerical value of 4 and means a Door. The Paths of the Empress and the High Priestess cross, and The Empress is the door through which The High Priestess passes when crossing from Intellect to Higher Consciousness. 
      Together with Gimel and Heh, Daleth forms what Crowley calls a “Triune Goddess”, three forms showing the Feminine Symbol, Yin. As the middle letter in the triplicity, The Empress represents both the most developed and the most generalized manifestation of Female: as wife/mother. Accordingly, this card refers to the planet Venus. 
      Venus is attributed to Air and Earth, combining the highest spiritual with the lowest material qualities. For this reason, she symbolizes the Alchemical energy of Salt. Salt is the inactive principle of Nature and must be energized by Sulfur to maintain the whirling equilibrium of the Universe.
      It’s important to note that the shape of The Tree of Life comprised of the ten Sephiroth is that of Venus. “The doctrine implied is that the fundamental formula of the Universe is Love.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '4',
      name: 'The Emperor',
      desc: `As with the Lesser Arcana, the number Four represents Law, Rule, and Government. Traditionally, The Emperor was a fiery and energetic card, and it represented a power that was not sustainable. In its old placement on The Tree of Life, The Emperor was attributed to Aries and Mars, to sheep and war, as the counterpart to the Empress card. 
      The Emperor card was reconfigured and given a new place on the Tree of Life by Aleister Crowley, however, and The Emperor is now attributed to the Hebrew letter Tzaddi and to the astrological sign of Aquarius. 
      Crowley understood that with the New Aeon there would be a New Order to honor new values. He intuited the fall of the Patriarchy, and he foretold a new era of equality that would be ruled not by Osiris, the God who was slain and resurrected, but by Horus, the hermaphroditic child-god. With its new placement, the card is no longer associated with the concept of Government of sheep through War. The new attribution of government for the New Age is to the peaceful and enlightened Aquarius.
      Tzaddi is the path which connects Netzach to Yesod. Tzaddi has the numeric value of 90 and its final form has the value of 90,000. It means the Fish-hook.
      Its secret title is the Sun of the Morning, Chief among the Mighty.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '5',
      name: 'The Hierophant',
      desc: `The Hierophant rules the New Aeon, Atu XX, which was briefly mentioned in the previous card. Egyptian symbolism serves to describe progression of rulers who each have a term of roughly two-thousand years. In an astrological sense, this can be described as the end of the Age of Pisces and the beginning of the Age of Aquarius. In a literal interpretation of this, one may say it is the end of the Age of the Fish and the dawn of the Age of Humanity.
      Once, Isis, the Great Mother, was worshiped. The Earth was holy and the Feminine was divine. Then, for a period of time, Osiris, the dying and resurrected god, was ruler. During this time, Maleness was considered divine, sacrifice and restriction were revered, and other than the virginal, all that was Feminine was reviled. 
      Thankfully, a New Age has dawned. Osiris the Father has been deposed, and He has been replaced by His Child, Horus. Now is the time of Peace and Love. The word of Sin is Restriction. Love is the Law.
      The card represents the Hebrew letter Vau, which means a Nail. The letter is associated with Taurus and has the numeric value of 6. The path connects Chokmah (Wisdom) to Chesed (Mercy).
      Its secret title is the Magus of the Eternal.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '6',
      name: 'The Lovers',
      desc: `This card has a second title: The Brothers. Six often denotes perfection, and who would be a more perfect embodiment of the Age of Love than lovers or siblings?  This card is a double card, and it is the twin of Atu XIV, Art, which is also a double card, making both cards sort of double-doubles. Studying the two cards can be most enlightening.
      This card refers to Cain/Abel, Eve/Lilith, idea/contradiction, particle/antiparticle, analysis/synthesis. Any idea suggests its opposite. With Atu XIV, VI composes the alchemical maxim: Solve et coagula. As with Atu I, the Juggler, we are to consider equilibrium, its fundamental importance, and its necessity. Crowley hints that this card is of transendental importance. “In its original form, it was the story of Creation.”
      Atu VI refers to Gemini and is ruled by Mercury. The corresponding Hebrew letter is Zayin, which means a Sword. Crowley calls the sword “an engine of division”, and it’s good to note he doesn’t call it a tool. The suit of swords refers to air and the intellectual world. The path of Zayin is from Binah (Understanding) to Tipareth (Beauty). Crowley states this path depicts inspiration.
      Their secret title is the Children of the Voice: the Oracles of the Mighty God.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '7',
      name: 'The Chariot',
      desc: `Atu VII is called The Chariot, and it is associated with the astrological sign of Cancer, the cardinal sign of Water. As The Hierophant brought down the Supernal Fire from Chokmah, The Chariot brings Supernal Water from The Great Sea, Binah (Understanding) to Geburah (Strength). This path is associated with the Hebrew letter Cheth, which means a Fence, and has the numerical value of eight.
      Its secret title is the Child of the Powers of the Waters: the Lord of the Triumph of Light.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '8',
      name: 'Adjustment',
      desc: `This card was called Justice in the old pack, but since the concept of justice is a human concept and not a law of nature, Crowley prefers the name Adjustment because, he says, “Nature is not just, according to any theological or ethical idea; but Nature is exact.”
      This card represents Libra, which is ruled by Venus, and in which Saturn is exalted. It represents the final adjustment of Tetragrammaton, where the Daughter is redeemed by her marriage to the Son and set upon the throne of the Mother, thereby awakening the Eld of the All-Father.
      This card, representing the Hebrew letter Lamed, is the female complement to the Fool card. The letters Alef Lamed spell AL, and constitute the secret key to Liber AL, the Book of the Law. She represents the “complete formula of the Dyad”, Manifestation, which may always we cancelled out “by the equilibration of opposites”. She is Karma, and she hold the scales and the sword. She is a hieroglyph of “Love is the Law; Love under Will”. “Every form of energy must be directed, must be applied with integrity, to the full satisfaction of its destiny.”
      Lamed means Ox Goad and has the numerical value of 30. It is the path between Geburah, Strength, and Tipareth, Beauty.
      Its secret title is the Daughter of the Lords of Truth, the Ruler of the Balance.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '9',
      name: 'The Hermit',
      desc: `This card is attributed to the letter Yod, which is the first letter of Tetragrammaton, and therefore represents the Father, the Logos, Wisdom, the highest form of Mercury, and whose manifestation on the physical plane is spermatozoa. 
      Yod is ruled by Virgo, the most fertile and receptive of the signs. This card represents Fertility in its highest sense. This card also represents the myth of Persephone.
      Yod is the path from Chesed (Mercy) to Tipareth (Beauty). On the Tree, it counter-balances Adjustment, Atu XIII. Yod means a Hand and has the numerical value of 10. It’s interesting to note that Virgo is ruled by and exalts Mercury.
      Its secret title is the Prophet of the Eternal, the Magus of the Voice of Power.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '10',
      name: 'Fortune',
      desc: `This card is attributed to Jupiter, which is known as “the Greater Fortune” in astrology. The path corresponds to the letter Kaph, which means the Palm of the hand, where fortunes are read. The letter Kaph has the numerical value of 20, but the final form has a value of 500. The path it represents connects Chesed, Mercy, to Netzach, Victory.
      The idea behind this card is that change is constant. The elements continually revolve. We are directed to consider the Wheel of Fortune. A wheel spins, rolls, and travels anywhere you want to go with relative ease, but we must attain the axle, which does this without moving.
      Its secret title is the Lord of the Forces of Life.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '11',
      name: 'Lust',
      desc: `Formerly named Strength, Crowley renamed this card because he considered the concept to be about more than just strength. The concept is also the joy of strength exercised, perhaps the being strong or the having of strength. The term Lust has added meaning for Thelemites. There is a quote in the Book of the Law admonishing us against the “lust of result” when manifesting our Will.
      The Lust card is attributed to the sign of Leo and the letter Teth, which means a Serpent and has the numerical value of 9. Crowley says this is the most powerful of the twelve Zodiacal cards. Leo is the Kerub of Fire and is ruled by the Sun. The path of Teth connects Chesed, Mercy, to Geburah, Strength. The path is balanced both vertically and horizontally on the tree.
      Its secret title is the Daughter of the Flaming Sword.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '12',
      name: 'The Hanged man',
      desc: `This card is represented by the letter Mem and the element of water. In particular, it represents the spiritual function of water in initiation to symbolize death and rebirth/baptism. The Hanged Man represents the descent of light into darkness in order to redeem it, but his is redemption without sacrifice, and specifically no self-sacrifice. This Hanged Man represents the God of the previous Aeon. “The whole idea of sacrifice is a misconception of nature.” Also, Crowley says, “Redemption is a bad word; it implies a debt. Fore every star possesses boundless wealth; the only proper was to deal with the ignorant is to bring them to the knowledge of their starry heritage. To do this, it is necessary to behave as must be done in order to get on good terms with animals and children: to treat them with absolute respect; even, in a certain sense, with worship.” Mem is the path between Geburah, Strength, and Hod, Splendor, and it has the numerical value of 40. Its final form has a value of 600.
      Its secret title is the Spirit of the Mighty Waters.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '13',
      name: 'Death',
      desc: `The Death card is probably the least understood and most feared by those of the previous Aeon. It’s unhelpful and unfortunate that they were taught that death is an Ending. This path is represented by the letter Nun, which means a Fish. The card represents the sign of Scorpio and the alchemical idea of putrefaction: “The strain of the environment has become intolerable, and the attacked element willingly subjects itself to change.” This card, along with Atu XI, Lust, and Atu XII, form a mini magickal narrative. There are three essential types of putrefaction, each represented by the fish, the serpent, and the eagle. This card is a more complete idea of death/resurrection that was corrupted by the Black Lodge of a secret male Creator/Destroyer God, Atu XV.
      Nun is the path which connects Tipareth (Beauty) to Netzach (Victory). It has the numerical value of 50, and its final version has a value of 700.
      Its secret title is the Child of the Great Transformers, the Lord of the Gate of Death.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '14',
      name: 'Art',
      desc: `The Art card is attributed to Sagittarius, the archer. It represents the letter Samech, which means a Prop and has the numeric value of 60. The path descends from Tipareth (Beauty) the seat of our perfect selves, to Yesod (the Foundation). Connecting Beauty to Foundation, it represents the specific Alchemical process of putrefaction that produces a Rainbow.
      The Art card was known as Temperance under the old Gods. They are a double card, neither male nor female but a little of both. They complete the Lovers card and form a double-double symbol, as both cards are both male and female. The Egyptian God Horus is said to rule the Age of Aquarius. Horus was a double god, male and female, a schizophrenic hermaphrodite. This New Age was prophesized to herald a great mingling of the sexes. Choosing the name Art over Temperance illustrates one of the great philosophical differences between the Ages. The only sin is restriction.
      Its secret title is the Daughter of the Reconcilers, the Bringer-Forth of Life.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '15',
      name: 'The Devil',
      desc: `The Devil is attributed to the letter Ayin, which means an Eye, has the numeric value of 70, and refers to Capricorn in the Zodiac. Since Capricorn is ruled by Saturn, this card is the masculine energy at its most masculine.
      This path connects Tipareth (Beauty) to Hod (Splendor). It’s interesting to note that the Devil and Death are symmetrically placed on the Tree. Crowley gives a hint that these two paths, together with Art, are the key “by which idea manifests as form”, and he also states the “formula for this card is the appreciation of all existing things”.
      Atu IX, Zero, and XV represent the sacred name of God I A O. As such, they form the “threefold explanation of the male creative energy”.
      Its secret title is the Lord of the Gates of Matter, the Child of the Forces of Time.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '16',
      name: 'The Tower',
      desc: `The Tower card is attributed to the letter Pe, which means Mouth and has the numerical value of 80. Its final form has the value of 800. The path of Pe is similarly balanced on the Tree as Teth, but Pe lies below Tipareth (Beauty) and connects Netzach (Victory) to Hod (Splendor). 
      In his discussion of the Art card, Atu XIV, Crowley names Hod and Netzach Thought and Bliss. It would be worthwhile to consider that the Mouth is the path that connects these two, and Art is the path that passes through it. 
      The Tower card is ruled also by Mars, so Crowley gives an alternate name: War. In the previous Aeon, this card was named the Blasted Tower. Its secret title is the Lord of the Hosts of the Mighty.
      All magickal symbols must be understood in a double sense, which includes the opposite, contradictory idea of its meaning. Again, there is the reminder that when a Thing is created, its opposite is also created. The destruction of both, or the Annihilation of both, is the return to the original Perfection.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '17',
      name: 'The Star',
      desc: `The Star card is attributed to the letter Heh and to the sign of the sign of Aries. In this deck, the Star holds the position usually occupied by the Emperor. The repositioning of this card on the Tree is one of the key tenets of Thelema, that “Every man and woman is a Star”. 
      At the time, Crowley was widely unpopular for suggesting that women were equal to men and even more so for also suggesting men and women possess an inherent divinity.
      The path of Heh connects Chokmah (Wisdom) to Tipareth (Beauty). Heh means a Window and has the numerical value of 5. Heh is a feminine letter and it is one of the Goddesses. Just as Atu 0, I, and IX are the Godforms, Atu II, III, and XVII describe three manifestations of feminine energy.
      Although Crowley states that this card, along with Trumps II and III, completes the Alchemical Triad of Mercury, Salt, and Sulfur, I’m going to assume that is also incorrect, and I’ll presume that the Star has assumed that role.
      Its secret title of this card is the Daughter of the Firmament; the Dweller between the Waters.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '18',
      name: 'Moon',
      desc: `The Moon card is attributed to the letter Qoph, which represents Pisces and the number 100. The letter Qoph means the Back of the Head and represents the potencies of the mind.
      This card represents midnight (especially the long dark night of the soul), it connects Netzach (Victory) to Malkuth (the Kingdom) and the path is guarded by Tabu. It is considered the path of the waning moon, of witchcraft, and of abominable deeds. As it references midnight and the end of winter, another name for this card is the Gateway of Resurrection.
      “Whatever horrors may afflict the soul, whatever abominations may excite the loathing of the heart, whatever terrors may assail the mind, the answer is the same at every stage: 'How splendid is the Adventure!'”
      Its secret title is the Ruler of Flux & Reflux, the Child of the Sons of the Mighty.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '19',
      name: 'The Sun',
      desc: `The Sun card, according to Crowley, is one of the simplest concepts in the deck. It is the Lord of the New Aeon. “He is the Lord of Light, Life, Liberty and Love. This Aeon has for its purpose the complete emancipation of the human race.”
      The Sun is attributed to the letter Resh, which means the Head and has a numerical value of 200. It connects Hod (Splendor) to Yesod (Foundation).
      The secret title of this card is the Lord of the Fire of the World.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '20',
      name: 'The Aeon',
      desc: `The Aeon card is attributed to the letter Shin, which means a Tooth and has the numerical value of 300. The path of Shin connects Hod (Splendor) to Malkuth (Kingdom), and it is attributed to both Fire and Spirit. 
      “In this card it has been necessary to depart completely from the tradition of the cards, in order to carry on that tradition.” The old card was called The Last Judgment or The Angel. As the previous Aeon was ruled by Osiris, the Egyptian God who was slain and resurrected, the overarching theme of the Age of Pisces the fish has been one of resurrection and sacrifice. They awaited the destruction of the world by fire, which apparently took place in 1904, when the Fiery God Horus replaced the Airy God Osiris as Hierophant. “I am the Hawk-Headed Lord of Silence & of Strength; ... my left hand is empty, for I have crushed an Universe; & nought remains.”
      At this point it may be prudent to say a few things about Horus, our new Hierophant. Born of Nuit, the Goddess often portrayed as the starry night sky and who represents limitless possibities, and Hadit, a wingéd globe who represents the concept of consciousness as an individual, concentrated point of view of the greater Whole. Horus, the hawk-headed god was born, but they are a double god. Their extroverted side is Ra-hoor-khuit, and their passive or introverted form is Hoor-pa-kraat. Thus, this family forms an example of the Tetragrammaton, with Horus being both Son and Daughter.
      Its secret title is the Spirit of the Primal Fire.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    }, 
    {
      id: '21',
      name: 'The Universe',
      desc: `This card is the final card in the story arc. Its name is The Universe, and it represents the Accomplishment of the Great Work. This is the future and the Best of All Possible Worlds.
      It is the final card in the deck, and as such it complements the first, The Fool. Just as The Fool was Nothing manifesting, so The Universe is manifestation full and ready to return to Nothing.
      The Universe is attributed to the letter Tau, which means a Cross. Tau has the numeric value of 400 and is attributed to both Saturn, who rules all of Time, and the Earth. 
      This Path forms a link from Malkuth (Kingdom), or the world as we know it, to Yesod (Foundation) and the Astral plane. Symbolically, this Path is the connection between the Moon and the Earth, between our conscious mind and our physical being, and between our internal world and our shared reality.
       The secret title of The Universe is The Great One of the Night of Time.`,
      img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=1000w',
    },
  ] 
};

app.get('/api/tarotDeck', (req ,res) => {
  res.json(tarotDeck);
});