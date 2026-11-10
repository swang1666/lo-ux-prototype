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
      { name: "Longevity Medicine", actionItems: "Review lipid-lowering therapy with the patient.\nConsider low-dose statin if LDL-C stays above target after 3 months of lifestyle changes.", frequency: "Review every 3 months", target: "LDL-C below 2.6 mmol/L" },
      { name: "Nutrition", actionItems: "Mediterranean-style diet with 25–30 g fibre a day.\nLimit saturated fat to under 10% of daily energy.\nReplace refined carbohydrates with whole grains.", frequency: "Daily", target: "HbA1c below 5.7%, waist under 90 cm" },
      { name: "Exercise", actionItems: "150 minutes of moderate aerobic activity a week.\nTwo sessions of resistance training a week.", frequency: "5 days a week", target: "VO2 max above age-group median" },
      { name: "Sleep", actionItems: "Keep a fixed sleep window of 7–8 hours.\nNo screens 60 minutes before bed.", frequency: "Nightly", target: "Sleep efficiency above 85%" },
      { name: "Stress Management", actionItems: "10 minutes of guided breathing or mindfulness a day.\nScreen for burnout at each follow-up visit.", frequency: "Daily", target: "PSS-10 score below 14" },
      { name: "Supplementation", actionItems: "Vitamin D3 2,000 IU a day with a meal.\nOmega-3 (EPA + DHA) 1 g a day.", frequency: "Daily", target: "25(OH)D between 75 and 125 nmol/L" }
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
   Longevidence evidence for supplements named in the action plan (New UI,
   round 6). The references are real published trials; the scores, the
   dimension values and the dose lines are illustrative demo values in the
   Longevidence format, not output of the Longevidence service.
   ===================================================================== */
window.LE_EVIDENCE = [
  {
    id: "omega3", match: "Omega-3", name: "Omega-3 (EPA + DHA)", score: 7.4, papers: 4, groups: 4, n: 4.0,
    dose: "1 g/day EPA + DHA; 4 g/day icosapent ethyl in REDUCE-IT",
    description: "Long-chain omega-3 fatty acids from marine sources. Large trials show a reduction in cardiovascular events, strongest with high-dose EPA in people with raised triglycerides.",
    dims: [
      { g: "E", code: "E1", label: "Significance", value: 0.80, max: 1.0 },
      { g: "E", code: "E2", label: "Effect size", value: 0.55, max: 1.0 },
      { g: "C", code: "C1", label: "Design", value: 1.00, max: 1.0 },
      { g: "C", code: "C2", label: "Execution", value: 0.95, max: 1.0 },
      { g: "C", code: "C3", label: "Open access / clinical trial", value: 0.10, max: 0.1 },
      { g: "R", code: "R", label: "Journal", value: 1.00, max: 1.0 }
    ],
    refs: [
      { authors: "Manson JE et al.", year: 2019, title: "Marine n-3 fatty acids and prevention of cardiovascular disease and cancer (VITAL).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1811403" },
      { authors: "Bhatt DL et al.", year: 2019, title: "Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia (REDUCE-IT).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1812792" },
      { authors: "ASCEND Study Collaborative Group", year: 2018, title: "Effects of n-3 fatty acid supplements in diabetes mellitus.", journal: "N Engl J Med", date: "2018-10-18", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1804989" },
      { authors: "Nicholls SJ et al.", year: 2020, title: "Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events in patients at high cardiovascular risk (STRENGTH).", journal: "JAMA", date: "2020-12-08", url: "https://jamanetwork.com/journals/jama/fullarticle/2773120" }
    ]
  },
  {
    id: "vitd3", match: "Vitamin D3", name: "Vitamin D3 (cholecalciferol)", score: 5.2, papers: 3, groups: 2, n: 2.7,
    dose: "2,000 IU/day",
    description: "Fat-soluble vitamin that supports calcium absorption and bone health. Large trials in the general population show little effect on cancer, cardiovascular events or fractures; benefit is clearest when baseline levels are low.",
    dims: [
      { g: "E", code: "E1", label: "Significance", value: 0.35, max: 1.0 },
      { g: "E", code: "E2", label: "Effect size", value: 0.20, max: 1.0 },
      { g: "C", code: "C1", label: "Design", value: 1.00, max: 1.0 },
      { g: "C", code: "C2", label: "Execution", value: 0.95, max: 1.0 },
      { g: "C", code: "C3", label: "Open access / clinical trial", value: 0.10, max: 0.1 },
      { g: "R", code: "R", label: "Journal", value: 1.00, max: 1.0 }
    ],
    refs: [
      { authors: "Manson JE et al.", year: 2019, title: "Vitamin D supplements and prevention of cancer and cardiovascular disease (VITAL).", journal: "N Engl J Med", date: "2019-01-03", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1809944" },
      { authors: "Bischoff-Ferrari HA et al.", year: 2020, title: "Effect of vitamin D supplementation, omega-3 fatty acid supplementation, or a strength-training exercise program on clinical outcomes in older adults (DO-HEALTH).", journal: "JAMA", date: "2020-11-10", url: "https://jamanetwork.com/journals/jama/fullarticle/2772625" },
      { authors: "LeBoff MS et al.", year: 2022, title: "Supplemental vitamin D and incident fractures in midlife and older adults.", journal: "N Engl J Med", date: "2022-07-28", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2202106" }
    ]
  }
];
