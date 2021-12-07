const fs = require("fs");
const { Db } = require("../firebase");

const data = {
  history: {
    "herbert macaulay": {
      English:
        "Herbert Macaulay: He was a popular nationalist leader, highly educated and very talented. The famous Nigerian was good in engineering and music. He studied architecture and was in love with journalism. He was also a well-known politician who founded the whole nationalism movement in our country.\n",
      name: "herbert macaulay",
    },
    "funmilayo ransom-kuti": {
      name: "funmilayo ransom-kuti",
      English:
        "Funmilayo Ransome-Kuti: Funmilayo Ransome-Kuti was a famous politician in Nigeria. She was also a teacher and fought for women’s rights. Besides, many Nigerians remember her as the first Nigerian woman who drove a car.\n",
      Yoruba:
        "Funmilayo Ransome-Kuti : Funmilayo Ransome-Kuti jẹ́ olóṣèlú tó gbajúmọ̀ àti olùkọ́ tó jà ijàgbara fún ẹ̀tọ́ obìnrin . Yàtọ̀ sí èyí, òun ni obìnrin àkọ́kọ́ tó wa ọkọ̀ ní orílẹ̀-èdè Nàìjíríà ní ogún ọ̀rúndún sẹ́yìn.  \n",
    },
    "kudirat abiola": {
      English:
        "Kudirat Abiola: This woman was married to Moshood Abiola who participated in the presidential elections in 1993. She stood against the military government and inspired millions of her countrymen to fight dictatorship.",
      name: "kudirat abiola",
      Yoruba:
        "Kudirat Abiola: Kudirat Abiola jẹ́ aya Moshood Abiola èyí tó kópa nínú ìdìbò fún ipò Ààrẹ orílẹ̀-èdè Nàìjíríà ní ọdún 1993.  Kudirat Abiola jà ìjàgbara láti rí pé ìjọba ológun kásẹ̀ ńlẹ̀ lórí lẹ́èdè Nàìjíríà. Ọ̀gọ̀ọ̀rọ̀ àwọn ọmọ ìlú rẹ̀ ló sì ṣí níyè láti lè jà.  ",
    },
    "nnamdi azikiwe": {
      name: "nnamdi azikiwe",
      Yoruba:
        'Nnamdi Azikwe : Nnamdi Azikwe, "Zik" ni orúkọ tí ọ̀pọ̀lọpọ̀ ọmọ orílẹ̀-èdè Nàìjíríà ńrántí rẹ̀ sí. .Nnamdi Azikwe ni Ààrẹ àkọ́kọ́ orílẹ̀-èdè Nàìjíríà, òun ló sì  jẹ́ Baba fún orílẹ̀-èdè náà, láàárín oṣù kẹwàá ọdún 1963 sí oṣù Kínní ọdún 1966. ',
      English:
        "Nnamdi Azikiwe: Born in 16th November, 1904, many Nigerians remember him as ‘Zik’. He became the ‘father of Nigerian nationalism’ in Nigeria and he was also the first-ever President of Nigeria from October 1963 until January 1966.",
    },
    "ahmadu bello": {
      name: "ahmadu bello",
      English:
        "Ahmadu Bello: He was another impressive politician who became the only premier of the Northern part of Nigeria and served in this position from 1954 until 1966. He fought for the independence of Nigeria from British rule, and this was a successful movement that led to Nigeria’s freedom.",
      Yoruba:
        "Ahmadu Bello : Ahmadu Bello jẹ́  olóṣèlú tó fakọyọ. Òun nìkan ló sì di aṣojú ìjọba fún  apá àríwá orílẹ̀-èdè Nàìjíríà nínú ìgbìmọ̀ aṣòfin .  Ó siṣẹ́ akitiyan ni ipò yìí láàárín ọdún 1954 sí ọdún 1966. Ahmadu Bello jà fún òmìnira orílẹ̀-èdè Nàìjíríà lọ́wọ́ ìjẹgàba àwọn Òyìnbó Aláwọ̀ funfun , ìgbésẹ  ńlá rẹ̀ yìí  kópa nínú òmìnira orílẹ̀-èdè Nàìjíríà. ",
    },
    "obafemi awolowo": {
      Yoruba:
        "Ọbáfẹ́mi Awólọ́wọ̀: Ọbáfẹ́mi Awólọ́wọ̀ kó ipa ribiribi fún ìgbélárugẹ òmìnira orílẹ̀-èdè Nàìjíríà . Yàtọ̀ sí pé ó jẹ́ Agbẹjọ́rò , ó  kẹ́kọ̀ọ́ gboyè nínú iṣẹ́ ìṣòwò, ó tún nífẹ̀ẹ́ sí iṣẹ́ ìròyìn . Ní ọdún 1949, Ọbáfẹ́mi Awólọ́wọ̀ ri dájú pé òun polongo pàtàkì ìgbélárugẹ orílẹ̀-èdè Nàìjíríà káàkiri ìlú.",
      English:
        "Obafemi Awolowo: Born in March 9th, 1909, he did a lot to promote the independence of Nigeria. Being a lawyer, he also studied commerce and was interested in journalism. In 1949, he was able to spread the idea of nationalism all across the country.",
      name: "obafemi awolowo",
    },
    ayelala: {
      name: "ayelala",
      English:
        "Ayelala: Ayelala is known to be a powerful and widely respected deity that punishes crimes of various types. Witches caught up in the clutches of Ayelala are known to confess their sins in the open. It could be invoked to solve the evil or unknown causes of events.",
    },
    islam: {
      English:
        "Islam: Islam is a religion made known by Prophet Mohammed. People that practice Islam surrender to the will of Allah. Trade was the major link that brought Islam into Nigeria.",
      name: "islam",
    },
    christianity: {
      name: "christianity",
      English:
        "Christianity: Christianity is a religion based on the belief in Jesus Christ. Christianity came to Nigeria in the 15th century when Roman Catholic was introduced by the Portuguese. Christianity in Nigeria presently is divided into denominations, each with its beliefs.",
    },
    eshu: {
      name: "eshu",
      English:
        'Eshu: Often wrongly translated as "The Devil" or "The Evil Being", Eshu is neither of these. He is also regarded as the "divine messenger", a prime negotiator said to assist in enhancing the power derived from herbal medicines.',
    },
    "oduduwa grove": {
      name: "oduduwa grove",
      English:
        "Oduduwa Grove: Oduduwa Grove is located in Ile-Ife, Osun State. The site is notable for being the point where Oduduwa, the legendary originator of the Yoruba race landed with a chain. At this location, a statue of Oduduwa with the chain and staff can be found.  ",
      Yoruba:
        "Ilé Odùduwà : Ní ìlú ilé-Ifẹ̀ ní ìpínlẹ̀ Ọ̀ṣun ni ilé Odùduwà wà. Ó jẹ́ ibi pàtàkì nílùú ilé-Ifẹ̀. Ó jẹ́ ọ̀gangan ibi tí Odùduwà Baba Yorùbá tẹ̀wòran sí. Ní ilé Odùduwà ni a ti rí ère Odùduwà pẹ̀lú ẹ̀wọ̀n tí Odùduwà fi tẹ̀wọ̀nràn àti ọ̀pá àṣẹ tí Odùduwà mú lọ́wọ́ .  ",
    },
  },
};

(async () => {
  await Db.collection("data").doc("documents").set(data, { merge: true });
  console.log("done");
})();
