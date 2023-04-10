INSERT INTO `green_card`.`ANTIPSYCHOTICS GUIDE` (`Name`, `Approx. equiv. dose`, `Half-life`, `Frequency`, `Tab Strength/Form Supplied`, `NPS`, `PP`, `MDE (ADaugment)`, `MDE (w.psychosis)`, `Delirium`, `EO-SCZ`, `LO-SCZ`)
VALUES
-- -Novel
('aripiprazole (Abilify)', '7.5', '75-94h^', 'od', '2, 5, 10, 15, 20, 30/tab', '5-10mg', 'null', '2-15mg', '2-15mg', 'null', '2-20mg', '2-10mg'),
('clozapine (Clozaril)', '100', '14h', 'hs-tid', '25, 50, 100, 200/tab', 'NR', '6.25-50mg', 'NR', 'NR', 'NR', '25-400mg', '25-200mg'),
('lurasidone (Latuda)‡', 'null', '18h', 'od', '40, 80, 120/tab', 'NR', 'NR', 'NR', 'NR', 'NR', '? (20-80mg)', '? (20-40 mg)'),
('olanzapine (Zyprexa)', '5', '21-54h', 'hs', '2.5, 5, 7.5, 10, 15, 20/inj, tab, diss tab', '2.5-15mg', 'NR', '? (2.5-10mg)', '2.5-20mg', '1.25-15mg', '2.5-20mg', '2.5-15mg'),
('paliperidone (Invega)', '2', '23h', 'hs', '3, 6, 9/er tabs', 'NR', 'NR', 'NR', '?', 'NR', '3-8mg', '3-4mg'),
('quetiapine (Seroquel)', '150', '6-12h^', 'hs-bid', '25, 50, 100, 150, 200, 300, 400/ir&er tabs', '? (12.5-200mg)', '? (12.5-400mg)**', '25-300mg', '25-400mg', '12.5-200mg', '25-500mg', '25-300mg'),
('risperidone (Risperdal)', '1.5', '20-24h^', 'hs-bid', '0.25, 0.5, 1, 2, 3, 4/tab, diss tab, liq', '0.25-2mg**', 'NR', '? (0.5-2mg)', '? (0.5-2mg)', '0.25-3mg', '0.5-4mg', '0.5-2mg'),
-- --Conventional-- 
('haloperidol (Haldol)', '2.5', '20h', 'hs-bid', '0.5, 1, 2, 5, 10, 20/inj, tab, liq', 'NR', 'NR', 'NR', 'NR', '0.25-2mg**', '0.5-5mg', '? (0.5-2mg)'),
('Ioxapine (Loxapac)', '15', '5-19h^', 'hs-tid', '2.5, 5, 10, 25, 50/inj, tab, liq', '? (2.5-20mg)', 'NR', 'NR', 'NR', '5-100mg', '2-100mg', '? (2-50mg)');
-- --Key: AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data. NOTES: doses may not reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data and in older adults they can often be increased up to 170%.

-- --on front end this data needs to be split into two tables for viewing purposes (requested by client)
INSERT INTO `green_card`.`COGNITIVE ENHANCERS GUIDE` (`Name`, `Action`, `Half-life`, `Dose (initial/monthly increment/maint)`, `Frequency`, `mg/form supplied`, `With food?`, `MCI`, `Mild-mod Alz`, `Severe Alz`, `Mixed (Alz+vas)`, `Vascular`, `LBD`, `FTD`, `PD`, `DSD`)
VALUES
('Donepezil (Aricept)', 'AChEI', '70h', '5mg/5mg/10mg', 'qAM', '5,10/tab, diss tab', 'Y', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'N'),
('Galantamine ER', 'AChEI', '7-8h', '8mg/8mg/24mg', 'qAM', '8,16,24/capsule', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N'),
('Rivastigmine (oral)', 'AChEI & BuChEI', '1-2h', '1.5mg BID/1.5mg BID/6mg BID', 'BID', '1.5, 3, 4.5, 6/capsule, liq', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N'),
('Rivastigmine (patch)', 'AChEI & BuChE', '1-2h', '4.8mg/to 9.5mg/9.5mg', 'q24hrs', '4.6, 9.5, 13.3/patch', 'N', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N'),
('Memantine', 'NMDA blocker', '60-100h', '5mg qAM/ ↑ by 5mg weekly/10mg BID', 'qAM week 1 then BID', '5,10/tab', 'N', 'N', 'mod. only', 'Y', 'No studies', 'N', 'N', 'N', 'N', 'N');
-- --Key: AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor
-- DSD: down syndrome dementia; FTD: frontotemporal dementia; LBD: lewy body dementia; MCI: mild cognitive impairment; N: not indicated; PD: parkinson's disease; Y: indicated.

-- --COGNITIVE ENHANCERS CLINICAL GUIDE--  
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_CONTRA', 'Contraindications');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_ACHEI', 'Adverse Effects (AChEI)');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_ACHEI_ME', 'Adverse Effects (Memantine)');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_BASELINE', 'Baseline');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_MONITOR', 'Monitoring');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_HOW_WHEN', 'How & When');

-- SEDATIVES/HYPNOTICS CLINICAL GUIDE-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('INSOMNIA_MAN', 'Insomnia  Management');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('SHYPCLIN_BFR', 'Before Prescribing');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('SHYPCLIN_STR', 'Starting');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('SHYPCLIN_END', 'Ending');

-- SEDATIVES/HYPNOTICS SAFETY CONCERNS-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('SHYPCLIN_SAF', 'Sedative/Hypnotic Safety Concerns');
  
-- --COGNITIVE ENHANCERS CLINICAL GUIDE--  
 INSERT INTO `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE` (`LIST_HEADERS_Id`,`Description`)
 VALUES 
 ('COG_CONTRA', 'No absolute contraindication'),
 ('COG_CONTRA', 'Relative (for AChEI):'),
 ('COG_CONTRA', 'LBBB, Bradycardia'),
 ('COG_CONTRA', 'Peptic Ulcer Disease'),
 ('COG_CONTRA', 'COPD (severe)'),
 ('COG_CONTRA', 'Anticholinergic medication'),
 ('COG_CONTRA', 'CrCl <15ml/min(memantine)'),
 ('COG_ACHEI', 'Intolerance 10-20%'),
 ('COG_ACHEI', 'Nausea, Vomiting'),
 ('COG_ACHEI', 'Diarrhea'),
 ('COG_ACHEI', 'Muscle Cramps'),
 ('COG_ACHEI', 'Insomnia/Nightmares'),
 ('COG_ACHEI', 'Anorexia'),
 ('COG_ACHEI', 'Weight Loss'),
 ('COG_ACHEI', 'Dizziness'),
 ('COG_ACHEI', 'Drooling'),
 ('COG_ACHEI', 'Nasopharyngitis'),
 ('COG_ACHEI_ME', 'Intolerance ~11%'),
 ('COG_ACHEI_ME', 'Dizziness'),
 ('COG_ACHEI_ME', 'Constipation'),
 ('COG_ACHEI_ME', 'Headache'),
 ('COG_ACHEI_ME', 'Sedation'),
 ('COG_ACHEI_ME', 'Anxiety'),
 ('COG_ACHEI_ME', 'Hallucinations'),
 ('COG_BASELINE', 'Ensure Resting HR > 50'),
 ('COG_MONITOR', 'Cognition'),
 ('COG_MONITOR', 'Global Functioning'),
 ('COG_MONITOR', 'Target Symptoms and Goal Attainment'),
 ('COG_MONITOR', 'MMSE (or similar) q  ≥ 3-6 months'),
 ('COG_MONITOR', 'IADLs & ADLs'),
 ('COG_MONITOR', 'Individual (eg. Reptitive Questions, Baking, Etc)');
 
INSERT INTO `green_card`.`insomnia management`(`LIST_HEADERS_Id`, `Description`)
VALUES 
('INSOMNIA_MAN', 'First Line Treatment: CBT-i (www.mysleepwell.ca)'), 
('INSOMNIA_MAN', 'Second Line Treatment: Sedatives (If CBTi Failure)'),
('INSOMNIA_MAN', 'NNT With a Sedative-Hypnotic For Improved Sleep = 13, NNH = 6');

INSERT INTO `green_card`.`SEDATIVES/HYPNOTICS GUIDE` (`Name`,`Dose equiv.`,`Time to peak in plasma`,`Half-life`,`Avg dose range (mg/day)`,`mg/Form supplied`)
VALUES
('clonazepam (Rivotril)', '0.25-0.5', '1-2h', '20-50h', '0.125-1', '0.5,1,2/tab'),
('lorazepam (Ativan)', '1', '2-4h (po)1h (IM, SL)', '10-25h', '0.25-2', '0.5,1,2/tab  0.5,1,2/SLtab4mg/mL/inj'),
('melatonin*', 'null', '2.6h', '3.5-4h', '2.0-10', '3,5,10/multiple'),
('oxazepam (Serax)', '15', '2-4h', '5-20h', '5-30.0', '10,15,30/tab'),
('temazepam (Restoril)', '10', '2-3h', '5-25h', '5-15.0', '15,30/cap'),
('trazodone (Desyrel)', 'null', '2-3h', '4-9h', '12.5-100', '50,75,100,150/tab'),
('zolpidem (Sublinox)', 'null', '1-2h', '2.5-4h', '5-10.0', '5,10/diss tab'),
('zopiclone (Imovane)', '7.5', '1.5h', '4-7h', '3.75-12.5', '5,7.5/tab');


INSERT INTO `green_card`.`sedatives/hypnotics clinical guide`(`LIST_HEADERS_Id`,`Description`)
VALUES 
('SHYPCLIN_BFR', 'Avoid Starting If Possible'),
('SHYPCLIN_BFR', 'Set End Date'),
('SHYPCLIN_BFR', 'Assess For Drug-Drug Interactions'),
('SHYPCLIN_BFR', 'Inform Paitent of Risks'),
('SHYPCLIN_STR', 'Low Dose, Intermittent Use'),
('SHYPCLIN_STR', 'Time-Limited'),
('SHYPCLIN_STR', 'Co-Start Safer Interventions (CBTi)'),
('SHYPCLIN_END', 'Gradual Taper'),
('SHYPCLIN_END', 'Add CBTi To Support');

INSERT INTO `green_card`.`sedatives/hypnotic safety concerns`(`LIST_HEADERS_Id`,`Description`)
VALUES
('SHYPCLIN_SAF', 'CNS Depression'),
('SHYPCLIN_SAF', 'Cognitive Impairment'),
('SHYPCLIN_SAF', 'Daytime Fatigue'),
('SHYPCLIN_SAF', 'Dependence'),
('SHYPCLIN_SAF', 'Falls'),
('SHYPCLIN_SAF', 'Fractures'),
('SHYPCLIN_SAF', 'Loss of Bladder Control'),
('SHYPCLIN_SAF', 'Motor Vehicle Accidents'),
('SHYPCLIN_SAF', 'Sleep Walking'),
('SHYPCLIN_SAF', 'Withdrawl');

INSERT INTO `green_card`.`deprescribing benzodiazepine-like sedatives`(`Duration of BZRA use (months)`,`Dose Reduction Schedule Duration (weeks)`,`Interval Between Dose Reductions (weeks)`)
VALUES
('4 to 12', '4 to 8', '1 to 2'),
('12 to 24', '8 to 16', '1 to 4'),
('24 to 48', '12 to 24', '2 to 4'),
('>48', '24 to 52', '4');


-- MOOD STABILIZERS GUIDE -- 
INSERT INTO `green_card`.`mood stabilizers guide` (`Name`,`Half-life`,`Dose (mg/day) Initial | Maint. | Max.`,`Frequency`,`mg/Form Supplied`,`Monitoring Level`)
VALUES ('Lamotrigine (Lamictal)', '25h', '12.5-25 hs | 50-250† | 200-300', 'bid', '25, 100, 150/tab, 2.5/chewtab', 'nil'),
('Lithium Carbonate (Carbolith, Lithane)', '20-26h', '150 od-bid | use drug levels', 'hs-tid', '150, 300, 600/cap', '0.4-0.8 µmol/L'),
('Lithium Citrate (Oral Liquid)', '20-26h', '5 ml bid | use drug levels', 'od-tid', '8mmol/5ml (=300mg Li carb)', '"'),
('Valproic Acid (Depakene)', '6-16h', '125 od-bid | 1000-2000 | 60mg/kg', 'b-tid', '250, 500/cap; 250/5ml liq', '350-700 µmol/L'),
('Divalproex (Epival)', '6-16h', '125 od-bid | 1000-2000 | 60mg/kg', '"', '125, 250, 500/tab', '"'),
('Antipsychotics', '"', 'Please See Antipsychotic Table', '"', '"', '"'),
('Carbamazepine (Tegretol)', '"', 'To be used with caution under expert supervision*', '"', '"', '"'),
('Oxcarbazepine (Trileptal)', '"', 'To be used with caution under expert supervision*', '"', '"', '"');
-- Key: 
-- †
-- dosage determined by concomitant drugs used (see Lamictal monograph for details). er tab: 
-- slow release. NOTES: doses may not reflect manufacturers' recommendations, they are based on 
-- clinical literature and experience; most drugs in this category do not have a formal mood stabilizer 
-- indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving a 
-- therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and adverse 
-- effects



INSERT INTO `green_card`.`PSYCHOTROPIC MONITORING` (Name, Antipsychotics, Lithium, Valproate)
VALUES
('Blood pressure', 'BL, ACI', 'BL, ACI', 'ACI'),
('BMI/weight/waist circ.', 'BL, 1m, 3m, annually', 'BL, ACI', 'ACI'),
('CBC', 'ACI', 'ACI', 'BL, 6m, ACI'),
('ECG', 'ACI', 'BL, ACI', '-'),
('Electrolytes', 'ACI', 'BL, q 6 m', 'ACI'),
('EPS', 'BL, 1m, 3m, annually', '-', '-'),
('HbA1C/FPG', 'BL, 3m, annually', 'BL, ACI', 'ACI'),
('Lipid Profile', 'BL, 3m, annually', 'BL, ACI', 'ACI'),
('Liver Enzymes', 'ACI', 'ACI', 'BL, 6m'),
('Prolactin', 'ACI', '-', '-'),
('Serum Cr', 'ACI', 'BL, q 6 mths', 'ACI'),
('Serum drug level', '-', 'q3-6m & 5d post dose ↑', '3-6m & 3-5d post dose ↑'),
('TSH', 'ACI', 'BL, q 6 m', '-');





-- --NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT--  
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('NPS_NONPHARM', 'Nonpharmacological Approach');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('NPS_PHARMA', 'Pharmacological Approach');

INSERT INTO `green_card`.`NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT` (`LIST_HEADERS_Id`,`Description`)
 VALUES 
 ('NPS_NONPHARM', 'Individualize approach to patient'),
 ('NPS_NONPHARM', 'Examine ABCs of behavior and identify the issue'),
 ('NPS_NONPHARM', 'General: comforting presence/physical contact, distraction, backing away, reminiscence/sensory/relaxation therapy'),
 ('NPS_NONPHARM', 'Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation'),
 ('NPS_NONPHARM', 'Resistance to care: personalize the experience (ie: offering choices), bed baths'),
 ('NPS_PHARMA', 'Only use if clinically signficant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed'),
 ('NPS_PHARMA', 'Psychosis: atypical antipsychotic*'),
 ('NPS_PHARMA', 'No psychosis: SSRI, trazadone, or atypical antipsychotic*'),
 ('NPS_PHARMA', 'Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy'),
 ('NPS_PHARMA', 'Pharmacological approach generally not helpful for primary wandering or vocalizing'),
 ('NPS_PHARMA', 'Treatment should be evaluated for tapering or discontinuation every 3-6 months');



INSERT INTO `green_card`.`ECT & PSYCHOACTIVE MEDICATIONS` (`Medication`, `Recommended Action`)
VALUES
('Anticonvulsants', 'Discontinue if possible or at least hold prior to ECT'),
('Benzodiazepines*', 'If unable to stop, hold dose x 24 hrs before ECT (↑seizure threshold). Can use flumazenil if not possible to hold or stop'),
('Bupropion', 'Use with caution (↓ seizure threshold)'),
('ChEIs', 'OK to continue'),
('Clozapine', 'Use with caution (↓ seizure threshold, ↑ risk of prolonged seizure)'),
('Levodopa', 'Reduce dose and monitor closely (↑ risk of side effects)'),
('Lithium', 'Hold x 24 hrs prior to ECT (↑ risk of cognitive deficits, delirium, spontaneous seizure). Reassess if emergent delirium post ECT.'),
('MAOIs', 'OK to continue'),
('Other Antidepressants', 'OK to continue'),
('Other Antipsychotics', 'OK to continue'),
('Zopiclone', 'OK if needed');


-- ANTIDEPRESSANT CLINICAL GUIDE-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTID_INAD', 'For Inadequate Response');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTID_MAIN', 'Maintenance');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTID_TAPE', 'Tapering');

-- ANTIDEPRESSANT CLINICAL GUIDE-- 
INSERT INTO `green_card`.`antidepressant clinical guide`(`LIST_HEADERS_Id`,`Description`)
VALUES
('ANTID_INAD', 'Switching is preferred over augmentation (↓ risk of falls)'),

('ANTID_MAIN', 'Single episode: ≥ 2 years'),
('ANTID_MAIN', 'Multiple episodes: ongoing (preventative)'),

('ANTID_TAPE', '≥ 2-3 months if switching or ineffective'),
('ANTID_TAPE', 'Longer tapering period if remitted (≥1-2 years)');

-- --ANTIDEPRESSANT SAFTEY CONCERNS-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTID_SC', 'Antidepressants Safety Concerns');

INSERT INTO `green_card`.`antidepressant safety concerns` (`LIST_HEADERS_Id`,`Description`)
VALUES ('ANTID_SC', 'Cognitive Impairment'),
 ('ANTID_SC', 'Drug-drug Interactions'),
 ('ANTID_SC', 'Falls'),
 ('ANTID_SC', 'Fractures'),
 ('ANTID_SC', 'GI bleed'),
 ('ANTID_SC', 'Hyponatremia/SIADH'),
 ('ANTID_SC', 'QTc prolongation (escitalopram, citalopram, TCAs)'),
 ('ANTID_SC', 'Seizures (bupropion, TCAs)');

-- --Common DDI''s With Psychotropics-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COM_DDI_PYS', 'Common DDI''s With Psychotropics');
-- --Common DDI''s With Psychotropics-- 
INSERT INTO `green_card`.`common ddis with psychotropics`(`LIST_HEADERS_Id`,`Description`)
VALUES ('COM_DDI_PYS', 'Antipsychotic + L-dopa = worsening of Parkinsons, worsening of psychosis'),
('COM_DDI_PYS', 'ChEI + anticholinergics = less therapeutic benefit'),
('COM_DDI_PYS', 'ChEI + beta blocker = bradycardia'),
('COM_DDI_PYS', 'Lithium + NSAIDs = ↑risk of toxicity'),
('COM_DDI_PYS', 'Lithium + certain diuretics = ↑risk of toxicity'),
('COM_DDI_PYS', 'SSRI + diuretics = hyponatremia'),
('COM_DDI_PYS', 'SSRI + antiplatelet = bleeding'),
('COM_DDI_PYS', 'SSRI + NSAIDs = bleeding'),
('COM_DDI_PYS', 'SSRI + warfarin = bleeding'),
('COM_DDI_PYS', 'SSRI + MAOI = serotonin syndrome');


-- --Antipsychotic Safety Concerns-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTIP_SAFE', 'Antipsychotic Safety Concerns');
-- --Antipsychotic Safety Concerns-- 
INSERT INTO `green_card`.`antipsychotic safety concerns`(`LIST_HEADERS_Id`,`Description`)
VALUES ('ANTIP_SAFE', '↑ risk of EPS & TD '),
('ANTIP_SAFE', 'Akathisia'),
('ANTIP_SAFE', 'Cognitive impairment'),
('ANTIP_SAFE', 'Dyslipidemia'),
('ANTIP_SAFE', 'Falls & fractures'),
('ANTIP_SAFE', 'Hyperglycemia'),
('ANTIP_SAFE', 'Mortality (NNH=87)'),
('ANTIP_SAFE', 'QTc prolongation'),
('ANTIP_SAFE', 'Stroke (NNH=53)'),
('ANTIP_SAFE', 'Weight gain');

-- --Prescribing and Deprescribing Principles-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('PRESCR_DEPRE', 'Prescribing and Deprescribing Principles');
-- --Prescribing and Deprescribing Principles-- 
INSERT INTO `green_card`.`prescribing and deprescribing principles`(`LIST_HEADERS_Id`,`Description`)
VALUES ('PRESCR_DEPRE', 'Always use minimum effective dose'),
('PRESCR_DEPRE', 'Reassess regularly for efficiacy and tolerability'),
('PRESCR_DEPRE', 'Assess medication list regularly for anticholinergic activity and drug drug interactions'),
('PRESCR_DEPRE', 'Most psychotropics have rebound or withdrawal effects so taper gradually and assess frequently'),
('PRESCR_DEPRE', 'Avoid medication with long half lives if possible'),
('PRESCR_DEPRE', 'For additional information: deprescribing.org, Beers Criteria, STOPP/START Criteria');


-- --Notable Changes In Older Adults That Affect Prescribing--
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('NOTABLE_CHA', 'Notable Changes In Older Adults That Affect Prescribing');
-- --Notable Changes In Older Adults That Affect Prescribing--
INSERT INTO `green_card`.`notable changes in older adults that affect prescribing`(`LIST_HEADERS_Id`,`Description`)
VALUES('NOTABLE_CHA', 'Changes in volume of distribution'),
('NOTABLE_CHA', 'CYP450 interactions'),
('NOTABLE_CHA', 'Decline in P450 activity with some isoenzymes'),
('NOTABLE_CHA', 'Decline in renal function'),
('NOTABLE_CHA', 'Decreased gastric acid'),
('NOTABLE_CHA', 'Decreased mesenteric blood flow'),
('NOTABLE_CHA', 'Hepatic metabolism decreases with age'),
('NOTABLE_CHA', 'Increased permeability of blood brain barrier'),
('NOTABLE_CHA', 'Medical comorbidities'),
('NOTABLE_CHA', 'Polypharmacy leading to DDIs'),
('NOTABLE_CHA', 'Reduced Ach synthesis and neurons (↑AEs)'),
('NOTABLE_CHA', 'Reduced baroreceptor sensitivity'),
('NOTABLE_CHA', 'Reduction in DA receptors/neurons (↑EPS)'),
('NOTABLE_CHA', 'SIADH and ↓Na with SSRIs more common');

-- --DELIRIUM MANAGEMENT--
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('DM_NONPHARM' , 'Nonpharmacological Approach');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('DM_PHARMA' , 'Pharmacological Approach');

INSERT INTO `green_card`.`DELIRIUM MANAGEMENT` (`LIST_HEADERS_Id`,`Description`)
 VALUES 
 ('DM_NONPHARM', 'Reduce noise'),
 ('DM_NONPHARM', 'Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)'),
 ('DM_NONPHARM', 'Correct sensory deficits (clean eyeglasses, working hearing aids)'),
 ('DM_NONPHARM', 'Increase patient''s sense of control'),
 ('DM_NONPHARM', 'Minimize room/environment changes'),
 ('DM_NONPHARM', 'Avoid restraints if possible'),
 ('DM_PHARMA', 'Only use if clinically signficant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed'),
 ('DM_PHARMA', 'Antipsychotics are treatment of choice (other than etoh withdrawal delirium)'),
 ('DM_PHARMA', 'Aim for monotherapy, lowest effective dose, and tapering ASAP'),
 ('DM_PHARMA', 'Haloperidol not recommended if pre-existing Parkinson''s or LBD'),
 ('DM_PHARMA', 'Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle');
 
 -- -- ANTICHOLINERGIC ACTIVITY-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTI_HIGH' , 'High');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTI_MED' , 'Medium');
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('ANTI_LOW' , 'Low');

INSERT INTO `green_card`.`ANTICHOLINERGIC ACTIVITY` (`LIST_HEADERS_Id` , `Description`)
VALUES
('ANTI_HIGH' , 'Amitriptyline (Elavil)'),
('ANTI_HIGH', 'Atropine (Sal-Tropine)'),
('ANTI_HIGH', 'Benztropine (Cogentin)'), 
('ANTI_HIGH', 'Chlorpromazine (Thorazine)'),
('ANTI_HIGH', 'Clomipramine (Anafranil))'),
('ANTI_HIGH', 'Clozapine (Clozaril)'),
('ANTI_HIGH', 'Desipramine (Norpramin)'),
('ANTI_HIGH', 'Dimenhydrinate (Gravol)'),
('ANTI_HIGH', 'Diphenhydramine (Benadryl)'),
('ANTI_HIGH', 'Doxepin (Sinequan)'),
('ANTI_HIGH', 'Fesoterodine (Toviaz)'),
('ANTI_HIGH', 'Hydroxyzine (Atarax)'),
('ANTI_HIGH', 'Imipramine (Tofranil)'),
('ANTI_HIGH', 'Methocarbamol (Robaxin)'),
('ANTI_HIGH', 'Nortriptyline (Pamelor)'),
('ANTI_HIGH', 'Olanzapine (Zyprexa)'),
('ANTI_HIGH', 'Oxybutynin (Ditropan)'),
('ANTI_HIGH', 'Paroxetine (Paxil)'),
('ANTI_HIGH', 'Perphenazine (Trilafon)'),
('ANTI_HIGH', 'Quetiapine (Seroquel)'),
('ANTI_HIGH', 'Solifenacin (Vesicare)'),
('ANTI_HIGH', 'Thioridazine (Mellaril)'),
('ANTI_HIGH', 'Tolterodine (Detrol)'),
('ANTI_HIGH', 'Trifluoperazine (Stelazine)'),
('ANTI_HIGH', 'Trihyxyphenidyl (Artane)'),
('ANTI_HIGH', 'Trospium (Sanctura)'),
('ANTI_MED', 'Amantadine (Symmetrel)'),
('ANTI_MED', 'Carbamazepine (Tegretol)'),
('ANTI_MED', 'Cyclobenzaprine (Flexeril)'),
('ANTI_MED', 'Cyproheptadine (Periactin)'),
('ANTI_MED', 'Loxapine (Loxitane)'),
('ANTI_MED', 'Meperidone (Demerol)'),
('ANTI_MED', 'Methotrimeprazine (Levoprome) '),
('ANTI_MED', 'Oxcarbazepine (Trileptal)'),
('ANTI_LOW', 'Alprazolam (Xanax)'),
('ANTI_LOW', 'Aripiprazole (Abilify)'),
('ANTI_LOW', 'Asenapine (Saphris)'),
('ANTI_LOW', 'Bupropion (Wellbutrin)'),
('ANTI_LOW', 'Cetirizine (Reactine)'),
('ANTI_LOW', 'Codeine'),
('ANTI_LOW', 'Colchicine (Odan)'),
('ANTI_LOW', 'Pimozide (Orap)'),
('ANTI_LOW', 'Diazepam (Valium)'),
('ANTI_LOW', 'Digoxin'),
('ANTI_LOW', 'Fentanyl'),
('ANTI_LOW', 'Furosemide (Lasix)'),
('ANTI_LOW', 'Fluvoxamine (Luvox)'),
('ANTI_LOW', 'Hydralazine'),
('ANTI_LOW', 'PHaloperidol (Haldol)'),
('ANTI_LOW', 'Hydrocortisone'),
('ANTI_LOW', 'Loperamide (Imodium)'),
('ANTI_LOW', 'Loratadine (Claritin)'),
('ANTI_LOW', 'Metoprolol'),
('ANTI_LOW', 'Morphine'),
('ANTI_LOW', 'Nifedipine (Adalat)'),
('ANTI_LOW', 'Paliperidone (Invega)'),
('ANTI_LOW', 'Prednisone'),
('ANTI_LOW', 'Ranitidine (Zantac)'),
('ANTI_LOW', 'Trazodone (Desyrel)'),
('ANTI_LOW', 'Venlafaxine (Effexor)'),
('ANTI_LOW', 'Warfarin'),
('ANTI_LOW', 'Pimozide (Orap)');


-- -- Antidepressants Guide-- 
INSERT INTO `green_card`.`ANTIDEPRESSANTS GUIDE` (`Name`, `Half-life`, `Primary NT` , `Dose (mg/day) Initial | Maint. | Max.` , `Frequency` , `mg/Form Supplied`)
VALUES 
('citalopram (Celexa)**' , '23-45h' , '5HT' , '5-10 | 20 | 20' , 'od' , '10,20,30,40/tab'),
 ('escitalopram (Cipralex)**' , '27-32h' , '5HT' , '' , 'od' , '10,20/tab'),
 ('fluoxetine (Prozac)' , '10-14d^' , '5HT' , '10 | 20-40 | 40' , 'od' , '10,20/cap,liq'),
 ('fluvoxamine (Luvox)' , '9-28h' , '5HT' , '25-50 | 50-200 | 200' , 'od' , '50,100/tab'),
 ('paroxetine (Paxil) ♯' , '3-65h' , '5HT' , '10 | 20-40 | 40' , 'od' , '10,20,30,40/tab'),
 ('sertraline (Zoloft)**' , '<104h^' , '5HT' , '25 | 50-150 | 200' , 'od' , '25,50,100/cap'),
 -- --Serotonin Modulator--
 ('vortioxetine (Trintellix)' , '66h' , '5HT' , '5-10 | 10-20 | 20' , 'od' , '5-10 | 10-20 | 20'),
 -- --SNRI--
 ('duloxetine (Cymbalta)**' , '8-17h' , '5HT, NA' , '30-60 | 60 | 120' , 'od' , '30,60/cap'),
 ('venlafaxine XR (Effexor XR)**' , '9-13h^' , '5HT, NA' , '37.5 | 75-150 | 300' , 'od' , '37.5,75,150/cap'),
 ('desvenlafaxine (Pristiq)' , '' , '5-HT, NA' , '50 | 50 | 50' , 'od' , '50,100/er tab'),
 -- --NaSSA--
 ('mirtazapine (Remeron)**' , '20-40h' , '5HT, NA' , '3.75-15 | 15-45 | 45' , 'hs' , '15,30,45/tab,diss tab'),
 -- --NDRi--
 ('bupropion (Wellbutrin SR)**' , '<27h^' , 'NA, DA' , '100 | 150-300 | 300' , 'bid' , '100,150/sr tab'),
 ('bupropion (Wellbutrin XL)**' , '<27h^' , 'NA, DA' , '150 | 150-300 | 300' , 'od' , '150,300/xl tab'),
 -- --TCA - 2°amine--
 ('desipramine (Norpramin)†' , '12-72h' , '' , '25am | 75-150 | 200' , 'bid' , '10,25,50,75,100/tab'),
 ('nortriptyline(Aventyl)†' , '13-88h' , '' , '10-25hs | 50-100 | 100' , 'hs/bid' , '10,25/cap'),
 -- --TCA - TCA - 3°amine--
 ('amitriptyline (Elavil)' , 'Not recommended', '', '', '', ''),
 -- --MAOI--
 ('phenelzine (Nardil)' , '1.5-4h' , 'NA, 5HT' , '15 | 45-90 | 90' , 'b-tid' , '15/tab'),
 ('tranylcypromine (Parnate)' , '2-4h' , 'NA, 5HT' , '10bid | 20-40 | 40' , 'am/bid' , '10/tab');