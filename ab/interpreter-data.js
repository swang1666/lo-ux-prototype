/* =====================================================================
   Demo interpretation content for the report detail page.
   Preview build: Gen-Decoder only.
   Proposed fields carried for Gen-Decoder only (New UI, round 5): disease.summary, disease classification
   and page (report page), pharmacogenomic group page. The shipped types do not have them yet.
   All text is illustrative sample data written for this prototype; it is
   not clinical advice and not taken from real patient reports.
   ===================================================================== */
window.INTERP = (() => {
  const actionFor = () => ({
    strategy: [
      { name: "Pillar I: Advanced Medical & Screening Protocol", actionItems: "Referral to a lipid clinic to confirm familial hypercholesterolemia and start lipid-lowering therapy; fasting lipid panel with ApoB and Lp(a) at baseline.\nAnnual breast MRI from age 30 and a clinical breast examination every 6 months, with referral to a familial cancer clinic to plan risk-reducing options for the BRCA2 finding.\nBaseline echocardiogram and 12-lead ECG for the MYBPC3 variant of uncertain significance; repeat every 2 to 3 years or sooner if symptoms appear.\nCarotid ultrasound to document early atherosclerosis and guide the intensity of treatment.\nGenetic counselling and cascade testing of first-degree relatives for the LDLR and BRCA2 variants.", frequency: "Baseline within 3 months, then annually; imaging intervals as listed.", target: "LDL-C below 2.6 mmol/L; cancer and cardiac surveillance established and documented." },
      { name: "Pillar II: Nutrition & Diet Protocol", actionItems: "Mediterranean-style pattern with 25 to 30 g of fibre a day, mainly from vegetables, legumes, oats and whole grains.\nKeep saturated fat under 7% of daily energy; replace butter and fatty meat with olive oil, nuts and oily fish twice a week.\nAdd 2 g a day of plant sterols from fortified foods to support LDL-C lowering alongside medication.\nLimit alcohol to no more than one drink a day given the elevated breast cancer risk.", frequency: "Daily", target: "LDL-C reduced by at least 10% from diet alone; waist under 90 cm; HbA1c below 5.7%." },
      { name: "Pillar III: Exercise & Physical Health", actionItems: "150 minutes a week of moderate aerobic activity such as brisk walking, cycling or swimming, spread over at least 5 days.\nTwo resistance sessions a week covering the major muscle groups.\nUntil the echocardiogram has been reviewed, avoid maximal-effort or competitive exertion because of the MYBPC3 finding.", frequency: "5 days a week", target: "VO2 max above the age-group median; resting heart rate under 70 bpm." },
      { name: "Pillar IV: Lifestyle Protocol", actionItems: "Keep a fixed sleep window of 7 to 8 hours; no screens for 60 minutes before bed.\n10 minutes of guided breathing or mindfulness a day; screen for burnout at each follow-up visit.\nNo smoking, including passive exposure; this matters doubly with the cardiovascular and cancer risks in this report.\nKeep caffeine out of the evening to protect sleep; under 200 mg a day in total.", frequency: "Daily", target: "Sleep efficiency above 85%; PSS-10 score below 14." },
      { name: "Pillar V: Supplementation Recommendations", actionItems: "Omega-3 (EPA + DHA) 1 g a day with a meal to support triglyceride control.\nVitamin D3 2,000 IU a day; recheck 25(OH)D after 3 months and adjust.\nFolic acid 0.4 mg a day if dietary folate is low; review with the next blood panel.\nAvoid red yeast rice and high-dose niacin products: they interact with statin therapy.", frequency: "Daily", target: "25(OH)D between 75 and 125 nmol/L; triglycerides under 1.7 mmol/L." },
      { name: "Pillar VI: Proactive Pharmacogenomic Management", actionItems: "Record the CYP2D6 ultrarapid, CYP2C19 intermediate and CYP2C9/VKORC1 results in the patient file and set medication alerts.\nAvoid codeine and tramadol; choose a non-opioid analgesic or an opioid not metabolized by CYP2D6.\nIf an antiplatelet is needed, prefer an alternative to clopidogrel; if warfarin is started, begin at a reduced dose with weekly INR checks for the first month.\nStart sertraline at the standard dose and titrate slowly; review the response at 4 weeks.", frequency: "Before each new prescription", target: "No drug–gene conflicts in the active medication list." }
    ],
    schedule: [
      { timeline: "Month 3", assessment: "Fasting lipid panel, ApoB, HbA1c", purpose: "Check the response to diet and exercise changes" },
      { timeline: "Month 6", assessment: "Liver function tests, hs-CRP, vitamin D", purpose: "Track inflammation and liver health" },
      { timeline: "Month 12", assessment: "Carotid ultrasound, repeat lipid panel", purpose: "Confirm cardiovascular risk is falling" }
    ],
    comments: ""
  });
  const note = { note: "" };

  const genDecoder = {
    disease: {
      summary: "Two pathogenic variants need follow-up: LDLR (familial hypercholesterolemia) and BRCA2 (hereditary breast and ovarian cancer). The MYBPC3 variant is of uncertain significance and needs baseline imaging only.",
      categories: [
        {
          category: "Cardiovascular Disease",
          instruction: "Variants linked to inherited lipid disorders and cardiomyopathy. Confirm with family history before acting on any single finding.",
          decisionFlow: [
            "Review the patient's personal and family history of early heart disease.",
            "Order a fasting lipid panel, ApoB and Lp(a) if not done in the last 6 months.",
            "Refer to cardiology when LDL-C stays above 4.9 mmol/L or symptoms are present."
          ],
          diseases: [
            {
              name: "Familial Hypercholesterolemia", gene: "LDLR", variant: "c.1775G>A (p.Gly592Glu)", classification: "Pathogenic", page: 4,
              description: "An inherited condition that keeps LDL cholesterol high from birth and raises the risk of early coronary heart disease.",
              symptoms: "- Persistently high LDL cholesterol\n- Tendon xanthomas\n- Early chest pain on exertion",
              prevention: "- Lipid panel every 6 months\n- Early statin therapy when indicated\n- Screen first-degree relatives",
              variantInterpretation: "Heterozygous carrier of a variant classified as pathogenic in public databases. Carriers usually have LDL-C two to three times above the population average.",
              reference: "https://www.ncbi.nlm.nih.gov/clinvar/", databaseSource: "ClinVar", matchedDiseaseName: "Familial hypercholesterolemia", matched: true
            },
            {
              name: "Hypertrophic Cardiomyopathy", gene: "MYBPC3", variant: "c.1504C>T (p.Arg502Trp)", classification: "Uncertain significance", page: 5,
              description: "Thickening of the heart muscle that can cause shortness of breath and, rarely, rhythm problems.",
              symptoms: "- Shortness of breath on exertion\n- Palpitations\n- Fainting during exercise",
              prevention: "- Baseline echocardiogram\n- ECG every 1–2 years\n- Avoid dehydration during intense exercise",
              variantInterpretation: "Variant of uncertain significance in this patient. No action beyond baseline imaging unless symptoms appear.",
              reference: "", databaseSource: null, matchedDiseaseName: "Hypertrophic cardiomyopathy", matched: true
            }
          ]
        },
        {
          category: "Cancer Predisposition",
          instruction: "Germline variants in cancer susceptibility genes. Findings here should be discussed with a genetic counsellor.",
          decisionFlow: [
            "Confirm the variant with a clinical-grade test.",
            "Offer genetic counselling to the patient and relatives.",
            "Start enhanced screening according to guideline age."
          ],
          diseases: [
            {
              name: "Hereditary Breast and Ovarian Cancer", gene: "BRCA2", variant: "c.5946del (p.Ser1982fs)", classification: "Pathogenic", page: 6,
              description: "Raises lifetime risk of breast, ovarian, prostate and pancreatic cancer.",
              symptoms: "- Usually no symptoms before cancer develops",
              prevention: "- Annual breast MRI from age 30\n- Discuss risk-reducing options\n- Pancreatic surveillance if family history",
              variantInterpretation: "Frameshift variant expected to cause loss of function. Classified as pathogenic.",
              reference: "https://www.ncbi.nlm.nih.gov/clinvar/", databaseSource: "ClinVar", matchedDiseaseName: "Hereditary breast and ovarian cancer syndrome", matched: true
            }
          ]
        },
        {
          category: "Metabolic Disorders",
          instruction: "Monogenic metabolic conditions screened in this report.",
          decisionFlow: ["No action required unless clinical signs appear."],
          diseases: []
        }
      ]
    },
    pharmacogenomic: {
      summary: "The patient carries variants that change how several common medicines are processed. Codeine should be avoided, warfarin needs a lower starting dose, and clopidogrel needs closer monitoring.",
      groupedMedications: [
        { actionType: "avoid", title: "Avoid or Use an Alternative", page: 8, medications: [
          { drug: "Codeine", genotype: "CYP2D6 *1/*1xN", phenotype: "Ultrarapid metabolizer", dosageGuidance: "Avoid codeine; use a non-opioid analgesic or an opioid not metabolized by CYP2D6." },
          { drug: "Tramadol", genotype: "CYP2D6 *1/*1xN", phenotype: "Ultrarapid metabolizer", dosageGuidance: "Avoid tramadol because of the risk of toxicity." }
        ] },
        { actionType: "dose_reduce", title: "Reduce the Dose", page: 9, medications: [
          { drug: "Warfarin", genotype: "CYP2C9 *1/*3, VKORC1 -1639 G/A", phenotype: "Intermediate metabolizer, increased sensitivity", dosageGuidance: "Start with a lower dose and use a validated dosing algorithm; check INR more often in the first month." }
        ] },
        { actionType: "use_with_monitoring", title: "Use with Monitoring", page: 9, medications: [
          { drug: "Clopidogrel", genotype: "CYP2C19 *1/*2", phenotype: "Intermediate metabolizer", dosageGuidance: "Reduced activation expected. Consider an alternative antiplatelet for acute coronary syndrome." },
          { drug: "Sertraline", genotype: "CYP2C19 *1/*2", phenotype: "Intermediate metabolizer", dosageGuidance: "Start at the standard dose and titrate slowly." }
        ] }
      ],
      lowerPriorityDrugs: ["Omeprazole", "Simvastatin", "Ondansetron", "Metoprolol", "Amitriptyline"]
    },
    lifestyle: {
      sections: [
        { title: "Nutrition & Metabolism", overview: "Genetic markers related to how the patient processes caffeine, fat and carbohydrates.", status: "Attention", statusType: "warning",
          results: [
            { item: "Caffeine metabolism (CYP1A2)", result: "Slow metabolizer", interpretation: "Caffeine stays in the body longer. High intake is linked to higher blood pressure in slow metabolizers." },
            { item: "Saturated fat response (APOA2)", result: "Sensitive", interpretation: "A diet high in saturated fat is more likely to raise BMI and LDL cholesterol." }
          ],
          recommendations: [
            { category: "Diet", instruction: "Keep caffeine under 200 mg a day (about two cups of coffee) and favour unsaturated fats." }
          ] },
        { title: "Exercise Response", overview: "Markers that influence endurance, power and recovery.", status: "Favorable", statusType: "success",
          results: [
            { item: "Endurance capacity (ACTN3)", result: "R/X genotype", interpretation: "Mixed profile. Both endurance and strength training are likely to give good results." }
          ],
          recommendations: [
            { category: "Training", instruction: "Combine aerobic sessions with two resistance sessions each week." }
          ] },
        { title: "Sleep & Circadian Rhythm", overview: "Markers linked to chronotype and sleep duration.", status: "Typical", statusType: "info",
          results: [
            { item: "Chronotype (PER3)", result: "Intermediate", interpretation: "No strong genetic preference for early or late sleep timing." }
          ],
          recommendations: [
            { category: "Sleep", instruction: "Keep a regular sleep window of 7–8 hours." }
          ] }
      ]
    },
    action: actionFor("gd"),
    note
  };

  return { "Gen-Decoder": genDecoder };
})();


/* =====================================================================
   Longevidence evidence for the supplements named in the action plan
   (New UI). Simplified on 10 Nov 2026 after PM feedback: the backend
   supplies a text summary and the related papers per supplement, no
   score. The papers are real publications; the summaries are
   illustrative demo text.
   Shape: { id, match (text matched in an action item), name, dose?,
            summary, papers: [{ authors, year, title, journal, date, url }] }
   ===================================================================== */
window.LE_EVIDENCE = [
  {
    id: "omega3", match: "Omega-3", name: "Omega-3 (EPA + DHA)",
    dose: "1 g/day EPA + DHA; 4 g/day icosapent ethyl in REDUCE-IT",
    summary: "Long-chain omega-3 fatty acids from marine sources. Large trials show a reduction in cardiovascular events, strongest with high-dose EPA in people with raised triglycerides.",
    papers: [
      { authors: "Manson JE et al.", year: 2019, title: "Marine n-3 fatty acids and prevention of cardiovascular disease and cancer (VITAL).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1811403" },
      { authors: "Bhatt DL et al.", year: 2019, title: "Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia (REDUCE-IT).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1812792" },
      { authors: "ASCEND Study Collaborative Group", year: 2018, title: "Effects of n-3 fatty acid supplements in diabetes mellitus.", journal: "N Engl J Med", date: "2018-10-18", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1804989" },
      { authors: "Nicholls SJ et al.", year: 2020, title: "Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events in patients at high cardiovascular risk (STRENGTH).", journal: "JAMA", date: "2020-12-08", url: "https://jamanetwork.com/journals/jama/fullarticle/2773120" }
    ]
  },
  {
    id: "folate", match: "Folic acid", name: "Folic acid (vitamin B9)",
    dose: "0.8 mg/day (CSPPT); 0.5 to 5 mg/day across trials",
    summary: "Synthetic form of vitamin B9. In populations without food fortification, folic acid lowers stroke risk, most clearly in people with hypertension or low baseline folate; the effect on other cardiovascular outcomes is small.",
    papers: [
      { authors: "Huo Y et al.", year: 2015, title: "Efficacy of folic acid therapy in primary prevention of stroke among adults with hypertension in China (CSPPT).", journal: "JAMA", date: "2015-04-07", url: "https://jamanetwork.com/journals/jama/fullarticle/2205876" },
      { authors: "Wang X et al.", year: 2007, title: "Efficacy of folic acid supplementation in stroke prevention: a meta-analysis.", journal: "Lancet", date: "2007-06-02", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(07)60854-X/fulltext" },
      { authors: "Li Y et al.", year: 2016, title: "Folic acid supplementation and the risk of cardiovascular diseases: a meta-analysis of randomized controlled trials.", journal: "J Am Heart Assoc", date: "2016-08-15", url: "https://www.ahajournals.org/doi/10.1161/JAHA.116.003768" }
    ]
  },
  {
    id: "vitd3", match: "Vitamin D3", name: "Vitamin D3 (cholecalciferol)",
    dose: "2,000 IU/day",
    summary: "Fat-soluble vitamin that supports calcium absorption and bone health. Large trials in the general population show little effect on cancer, cardiovascular events or fractures; benefit is clearest when baseline levels are low.",
    papers: [
      { authors: "Manson JE et al.", year: 2019, title: "Vitamin D supplements and prevention of cancer and cardiovascular disease (VITAL).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1809944" },
      { authors: "Bischoff-Ferrari HA et al.", year: 2020, title: "Effect of vitamin D supplementation, omega-3 fatty acid supplementation, or a strength-training exercise program on clinical outcomes in older adults (DO-HEALTH).", journal: "JAMA", date: "2020-11-10", url: "https://jamanetwork.com/journals/jama/fullarticle/2772625" },
      { authors: "LeBoff MS et al.", year: 2022, title: "Supplemental vitamin D and incident fractures in midlife and older adults.", journal: "N Engl J Med", date: "2022-07-28", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2202106" }
    ]
  }
];
