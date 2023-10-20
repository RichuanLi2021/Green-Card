INSERT INTO `green_card`.`ANTIPSYCHOTICS GUIDE` (`Name`, `Approx. equiv. dose`, `Half-life`, `Frequency`, `Tab Strength/Form Supplied`, `NPS`, `PP`, `MDE (ADaugment)`, `MDE (w.psychosis)`, `Delirium`, `EO-SCZ`, `LO-SCZ`)
VALUES
-- -Novel
('aripiprazole (Abilify)', '7.5', '75-94h-accounts for half-life of active metabolites', 'od', '2, 5, 10, 15, 20, 30/tablet', '5-10mg', 'null', '2-15mg', '2-15mg', 'null', '2-20mg', '2-10mg'),
('clozapine (Clozaril)', '100', '14h', 'hs-tid', '25, 50, 100, 200/tablet', 'NR', '6.25-50mg', 'NR', 'NR', 'NR', '25-400mg', '25-200mg'),
('lurasidone (Latuda) ‡', 'null', '18h', 'od', '40, 80, 120/tablet', 'NR', 'NR', 'NR', 'NR', 'NR', 'inconsistent or insufficient data (20-80mg)', 'inconsistent or insufficient data (20-40 mg)'),
('olanzapine (Zyprexa)', '5', '21-54h', 'hs', '2.5, 5, 7.5, 10, 15, 20/inj, tablet, diss tablet', '2.5-15mg', 'NR', 'inconsistent or insufficient data (2.5-10mg)', '2.5-20mg', '1.25-15mg', '2.5-20mg', '2.5-15mg'),
('paliperidone (Invega)', '2', '23h', 'hs', '3, 6, 9/er tabs', 'NR', 'NR', 'NR', 'inconsistent or insufficient data', 'NR', '3-8mg', '3-4mg'),
('quetiapine (Seroquel)', '150', '6-12h-accounts for half-life of active metabolites', 'hs-bid', '25, 50, 100, 150, 200, 300, 400/ir&er tabs', 'inconsistent or insufficient data (12.5-200mg)', 'inconsistent or insufficient data (12.5-400mg)-preferred medication based on research and/or expert opinion', '25-300mg', '25-400mg', '12.5-200mg', '25-500mg', '25-300mg'),
('risperidone (Risperdal)', '1.5', '20-24h-accounts for half-life of active metabolites', 'hs-bid', '0.25, 0.5, 1, 2, 3, 4/tablet, diss tab, liq', '0.25-2mg preferred medication based on research and/or expert opinion', 'NR', 'inconsistent or insufficient data (0.5-2mg)', 'inconsistent or insufficient data (0.5-2mg)', '0.25-3mg', '0.5-4mg', '0.5-2mg'),
-- --Conventional-- 
('haloperidol (Haldol)', '2.5', '20h', 'hs-bid', '0.5, 1, 2, 5, 10, 20/inj, tablet, liq', 'NR', 'NR', 'NR', 'NR', '0.25-2mg preferred medication based on research and/or expert opinion', '0.5-5mg', '? (0.5-2mg)'),
('Ioxapine (Loxapac)', '15', '5-19h-accounts for half-life of active metabolites', 'hs-tid', '2.5, 5, 10, 25, 50/inj, tablet, liq', 'inconsistent or insufficient data (2.5-20mg)', 'NR', 'NR', 'NR', '5-100mg', '2-100mg', 'inconsistent or insufficient data (2-50mg)');
-- --Key: AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data. NOTES: doses may not reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data and in older adults they can often be increased up to 170%.

-- --on front end this data needs to be split into two tables for viewing purposes (requested by client)
INSERT INTO `green_card`.`COGNITIVE ENHANCERS GUIDE` (`Name`, `Action`, `Half-life`, `Dose (initial/monthly increment/maint)`, `Frequency`, `mg/form supplied`, `With food`, `MCI`, `Mild-mod Alz`, `Severe Alz`, `Mixed (Alz+vas)`, `Vascular`, `LBD`, `FTD`, `PD`, `DSD`)
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
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COG_HOW_WHEN', 'How and When');

-- SEDATIVES/HYPNOTICS CLINICAL GUIDE-- 
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('INSOMNIA_MAN', 'Insomnia  Management');


  
-- --COGNITIVE ENHANCERS CLINICAL GUIDE--  
 -- Inserting descriptions/values for each header
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
('COG_HOW_WHEN', 'MMSE (or similar) q  ≥ 3-6 months'),
('COG_HOW_WHEN', 'IADLs & ADLs'),
('COG_HOW_WHEN', 'Individual (eg. Repetitive Questions, Baking, Etc)');

INSERT INTO `green_card`.`INSOMNIA MANAGEMENT`(`LIST_HEADERS_Id`, `Description`)
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


INSERT INTO `green_card`.`SEDATIVES/HYPNOTICS CLINICAL GUIDE`(`LIST_HEADERS`,`Description`)
VALUES
('Before prescribing', 'Avoid Starting If Possible'),
('Before prescribing', 'Set End Date'),
('Before prescribing', 'Assess For Drug-Drug Interactions'),
('Before prescribing', 'Inform Paitent of Risks'),
('Starting', 'Low Dose, Intermittent Use'),
('Starting', 'Time-Limited'),
('Starting', 'Co-Start Safer Interventions (CBTi)'),
('Ending ', 'Gradual Taper'),
('Ending ', 'Add CBTi To Support');

INSERT INTO `green_card`.`SEDATIVES/HYPNOTIC SAFETY CONCERNS`(`Description`)
VALUES
( 'CNS Depression'),
('Cognitive Impairment'),
('Daytime Fatigue'),
('Dependence'),
('Falls'),
('Fractures'),
('Loss of Bladder Control'),
('Motor Vehicle Accidents'),
('Sleep Walking'),
('Withdrawl');

INSERT INTO `green_card`.`deprescribing benzodiazepine-like sedatives`(`Duration`,`Dose Reduction Schedule Duration (weeks)`,`Interval Between Dose Reductions (weeks)`)
VALUES
('4 to 12', '4 to 8', '1 to 2'),
('12 to 24', '8 to 16', '1 to 4'),
('24 to 48', '12 to 24', '2 to 4'),
('>48', '24 to 52', '4');


-- DELIRIUM MANAGEMENT --
INSERT INTO `DELIRIUM_MANAGEMENT` (`High`, `Medium`, `Low`) VALUES
("Amitriptyline (Elavil)", "Amantadine (Symmetrel)", "Alprazolam (Xanax)"),
("Atropine (Sal-Tropine)", "Carbamazepine (Tegretol)", "Aripiprazole (Abilify)"),
("Benztropine (Cogentin)", "Cyclobenzaprine (Flexeril)", "Asenapine (Saphris)"),
("Chlorpromazine (Thorazine)", "Cyproheptadine (Periactin)", "Bupropion (Wellbutrin)"),
("Clomipramine (Anafranil)", "Loxapine (Loxitane)", "Cetirizine (Reactine)"),
("Clozapine (Clozaril)", "Meperidone (Demerol)", "Codeine"),
("Desipramine (Norpramin)", "Methotrimeprazine (Levoprome)", "Colchicine (Odan)"),
("Dimenhydrinate (Gravol)", "Oxcarbazepine (Trileptal)", "Diazepam (Valium)"),
("Doxepin (Sinequan)", "Pimozide (Orap)", "Digoxin"),
("Fesoterodine (Toviaz)", "", "Fentanyl"),
("Hydroxyzine (Atarax)", "", "Furosemide (Lasix)"),
("Imipramine (Tofranil)", "", "Fluvoxamine (Luvox)"),
("Methocarbamol (Robaxin)", "", "Hydralazine"),
("Nortriptyline (Pamelor)", "", "Haloperidol (Haldol)"),
("Olanzapine (Zyprexa)", "", "Hydrocortisone"),
("Oxybutynin (Ditropan)", "", "Loperamide (Imodium)"),
("Paroxetine (Paxil)", "", "Loratadine (Claritin)"),
("Perphenazine (Trilafon)", "", "Metoprolol"),
("Quetiapine (Seroquel)", "", "Morphine"),
("Solifenacin (Vesicare)", "", "Nifedipine (Adalat)"),
("Thioridazine (Mellaril)", "", "Paliperidone (Invega)"),
("Tolterodine (Detrol)", "", "Prednisone"),
("Trifluoperazine (Stelazine)", "", "Ranitidine (Zantac)"),
("Trihyxyphenidyl (Artane)", "", "Trazodone (Desyrel)"),
("Trospium (Sanctura)", "", "Venlafaxine (Effexor)"),
("", "", "Warfarin");



-- MOOD STABILIZERS GUIDE --
INSERT INTO `green_card`.`MOOD STABILIZERS GUIDE` (`Name`,`Half-life`,`Dose (mg/day) Initial | Maint. | Max.`,`Frequency`,`mg/Form Supplied`,`Monitoring Level`)
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



INSERT INTO `green_card`.`PSYCHOTROPIC MONITORING` (`Name`, `Antipsychotics`, `Lithium`, `Valproate`)
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
INSERT INTO `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE`(`LIST_HEADERS`,`Description`)
VALUES
('For inadequate response', 'Switching is preferred over augmentation (↓ risk of falls)'),

('Maintenance', 'Single episode: ≥ 2 years'),
('Maintenance', 'Multiple episodes: ongoing (preventative)'),

('Tapering', '≥ 2-3 months if switching or ineffective'),
('Tapering', 'Longer tapering period if remitted (≥1-2 years)');


-- --ANTIDEPRESSANT SAFTEY CONCERNS--
INSERT INTO `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS` (`Description`)
VALUES ('Cognitive Impairment'),
 ('Drug-drug Interactions'),
 ('Falls'),
 ('Fractures'),
 ('GI bleed'),
 ('Hyponatremia/SIADH'),
 ('QTc prolongation (escitalopram, citalopram, TCAs)'),
 ('Seizures (bupropion, TCAs)');

-- --Common DDI''s With Psychotropics--
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('COM_DDI_PYS', 'Common DDI''s With Psychotropics');
-- --Common DDI''s With Psychotropics--
INSERT INTO `green_card`.`COMMON DDIs WITH PSYCHOTROPICS`(`LIST_HEADERS_Id`,`Description`)
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

-- --Antipsychotic Safety Concerns--
INSERT INTO `green_card`.`ANTIPSYCHOTIC SAFETY CONCERNS`(`Description`)
VALUES ( '↑ risk of EPS & TD '),
('Akathisia'),
('Cognitive impairment'),
('Dyslipidemia'),
('Falls & fractures'),
('Hyperglycemia'),
('Mortality (NNH=87)'),
('QTc prolongation'),
('Stroke (NNH=53)'),
('Weight gain');

-- --Prescribing and Deprescribing Principles--
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('PRESCR_DEPRE', 'Prescribing and Deprescribing Principles');
-- --Prescribing and Deprescribing Principles--
INSERT INTO `green_card`.`PRESCRIBING AND DEPRESCRIBING PRINCIPLES`(`LIST_HEADERS_Id`,`Description`)
VALUES ('PRESCR_DEPRE', 'Always use minimum effective dose'),
('PRESCR_DEPRE', 'Reassess regularly for efficiacy and tolerability'),
('PRESCR_DEPRE', 'Assess medication list regularly for anticholinergic activity and drug drug interactions'),
('PRESCR_DEPRE', 'Most psychotropics have rebound or withdrawal effects so taper gradually and assess frequently'),
('PRESCR_DEPRE', 'Avoid medication with long half lives if possible'),
('PRESCR_DEPRE', 'For additional information: deprescribing.org, Beers Criteria, STOPP/START Criteria');

INSERT INTO `green_card`.`user_model`(`id`,`username`,`password`)
VALUES ('1','Kathleen','Singh');


-- --Notable Changes In Older Adults That Affect Prescribing--
INSERT INTO `green_card`.`LIST HEADERS` VALUES ('NOTABLE_CHA', 'Notable Changes In Older Adults That Affect Prescribing');
-- --Notable Changes In Older Adults That Affect Prescribing--
INSERT INTO `green_card`.`NOTABLE CHANGES IN OLDER ADULTS THAT AFFECT PRESCRIBING`(`LIST_HEADERS_Id`,`Description`)
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

INSERT INTO `green_card`.`ANTICHOLINERGIC ACTIVITY` (`LIST_HEADERS` , `Description`)
VALUES
('HIGH' , 'Amitriptyline (Elavil)'),
('HIGH', 'Atropine (Sal-Tropine)'),
('HIGH', 'Benztropine (Cogentin)'), 
('HIGH', 'Chlorpromazine (Thorazine)'),
('HIGH', 'Clomipramine (Anafranil))'),
('HIGH', 'Clozapine (Clozaril)'),
('HIGH', 'Desipramine (Norpramin)'),
('HIGH', 'Dimenhydrinate (Gravol)'),
('HIGH', 'Diphenhydramine (Benadryl)'),
('HIGH', 'Doxepin (Sinequan)'),
('HIGH', 'Fesoterodine (Toviaz)'),
('HIGH', 'Hydroxyzine (Atarax)'),
('HIGH', 'Imipramine (Tofranil)'),
('HIGH', 'Methocarbamol (Robaxin)'),
('HIGH', 'Nortriptyline (Pamelor)'),
('HIGH', 'Olanzapine (Zyprexa)'),
('HIGH', 'Oxybutynin (Ditropan)'),
('HIGH', 'Paroxetine (Paxil)'),
('HIGH', 'Perphenazine (Trilafon)'),
('HIGH', 'Quetiapine (Seroquel)'),
('HIGH', 'Solifenacin (Vesicare)'),
('HIGH', 'Thioridazine (Mellaril)'),
('HIGH', 'Tolterodine (Detrol)'),
('HIGH', 'Trifluoperazine (Stelazine)'),
('HIGH', 'Trihyxyphenidyl (Artane)'),
('HIGH', 'Trospium (Sanctura)'),
('MEDIUM', 'Amantadine (Symmetrel)'),
('MEDIUM', 'Carbamazepine (Tegretol)'),
('MEDIUM', 'Cyclobenzaprine (Flexeril)'),
('MEDIUM', 'Cyproheptadine (Periactin)'),
('MEDIUM', 'Loxapine (Loxitane)'),
('MEDIUM', 'Meperidone (Demerol)'),
('MEDIUM', 'Methotrimeprazine (Levoprome) '),
('MEDIUM', 'Oxcarbazepine (Trileptal)'),
('LOW', 'Alprazolam (Xanax)'),
('LOW', 'Aripiprazole (Abilify)'),
('LOW', 'Asenapine (Saphris)'),
('LOW', 'Bupropion (Wellbutrin)'),
('LOW', 'Cetirizine (Reactine)'),
('LOW', 'Codeine'),
('LOW', 'Colchicine (Odan)'),
('LOW', 'Pimozide (Orap)'),
('LOW', 'Diazepam (Valium)'),
('LOW', 'Digoxin'),
('LOW', 'Fentanyl'),
('LOW', 'Furosemide (Lasix)'),
('LOW', 'Fluvoxamine (Luvox)'),
('LOW', 'Hydralazine'),
('LOW', 'PHaloperidol (Haldol)'),
('LOW', 'Hydrocortisone'),
('LOW', 'Loperamide (Imodium)'),
('LOW', 'Loratadine (Claritin)'),
('LOW', 'Metoprolol'),
('LOW', 'Morphine'),
('LOW', 'Nifedipine (Adalat)'),
('LOW', 'Paliperidone (Invega)'),
('LOW', 'Prednisone'),
('LOW', 'Ranitidine (Zantac)'),
('LOW', 'Trazodone (Desyrel)'),
('LOW', 'Venlafaxine (Effexor)'),
('LOW', 'Warfarin'),
('LOW', 'Pimozide (Orap)');


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



INSERT INTO `green_card`.`SEARCH RESULTS` (
  `Name`,
  `Monitoring Level`,
  `Action`,
  `Primary NT`,
  `Half-life`,
  `Time to peak in plasma` ,
  `Avg dose range (mg/day)`,
  `Dose (initial/monthly increment/maint)`,
  `Dose equiv.` ,
  `Frequency` ,
  `mg/Form Supplied`,
  `With food` ,
  `MCI`,
  `mild-mod Alz` ,
  `Severe Alz` ,
  `Tab Strength/Form Supplied` ,
  `NPS` ,
  `PP` ,
  `MDE (ADaugment)` ,
  `MDE (w.psychosis)` ,
  `Delirium` ,
  `EO-SCZ` ,
  `LO-SCZ` ,
  `Mixed (Alz+vas)` ,
  `Vascular` ,
  `LBD` ,
  `FTD` ,
  `PD`,
  `DSD`)
VALUES 
('Donepezil (Aricept)','null','AChEI','null','70h','null','null','5mg/5mg/10mg','null','qAM','5,10/tab, diss tab','Y', 'N', 'Y', 'Y','null','null','null','null','null','null','null','null','Y', 'N', 'Y', 'N', 'Y', 'N'),
('Galantamine ER','null','AChEI','null','7-8h','null','null','8mg/8mg/24mg','null','qAM','8,16,24/capsule','Y', 'N', 'Y', 'N','null','null','null','null','null','null','null','null','Y', 'N', 'Y', 'N', 'Y', 'N'),
('Rivastigmine (oral)','null','AChEI & BuChEI','null','1-2h','null','null','1.5mg BID/1.5mg BID/6mg BID','null','BID','1.5, 3, 4.5, 6/capsule, liq','Y', 'N', 'Y', 'N','null','null','null','null','null','null','null','null','Y', 'N', 'Y', 'N', 'Y', 'N'),
('Rivastigmine (patch)','null','AChEI & BuChE','null','1-2h','null','null','4.8mg/to 9.5mg/9.5mg','null','q24hrs','4.6, 9.5, 13.3/patch','N', 'N', 'Y', 'N','null','null','null','null','null','null','null','null','Y', 'N', 'Y', 'N', 'Y', 'N'),
('Memantine','null','NMDA blocker','null','60-100h','null','null','5mg qAM/ ↑ by 5mg weekly/10mg BID','null','qAM week 1 then BID','5,10/tab','N', 'N', 'mod. only', 'Y','null','null','null','null','null','null','null','null','No studies', 'N', 'N', 'N', 'N', 'N'),
('Lamotrigine (Lamictal)','nil','null','null','25h','null','null', 'Initial 12.5-25 hs |Maint.  50-250† |Max. 200-300','null', 'bid','25, 100, 150/tab, 2.5/chewtab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Lithium Carbonate (Carbolith, Lithane)','0.4-0.8 µmol/L','null','null','20-26h','null','null', 'Initial 150 od-bid | use drug levels','null', 'hs-tid', '150, 300, 600/cap','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Lithium Citrate (Oral Liquid)','"','null','null','20-26h','null','null', 'Initial 5 ml bid | use drug levels','null', 'od-tid', '8mmol/5ml (=300mg Li carb)','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Valproic Acid (Depakene)','350-700 µmol/L','null','null','6-16h','null','null', 'Initial 125 od-bid |Maint. 1000-2000 |Max. 60mg/kg','null', 'b-tid', '250, 500/cap; 250/5ml liq','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Divalproex (Epival)','"','null','null','6-16h','null','null', 'Initial 125 od-bid |Maint. 1000-2000 |Max. 60mg/kg','null', '"', '125, 250, 500/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Antipsychotics','"','null','null','"','null','null', 'Please See Antipsychotic Table','null', '"', '"','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Carbamazepine (Tegretol)','"','null','null','"','null','null', 'To be used with caution under expert supervision*','null', '"', '"','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('Oxcarbazepine (Trileptal)','"','null','null','"','null','null', 'To be used with caution under expert supervision*','null', '"', '"','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('clonazepam (Rivotril)','null','null','null','20-50h', '1-2h','0.125-1','null','0.25-0.5','null','0.5,1,2/tab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('lorazepam (Ativan)','null','null','null','10-25h','2-4h (po)1h (IM, SL)','0.25-2','null','1','null', '0.5,1,2/tab  0.5,1,2/SLtab4mg/mL/inj', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('melatonin*','null','null','null','3.5-4h','2.6h','2.0-10','null','null','null', '3,5,10/multiple', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('oxazepam (Serax)','null','null','null','5-20h','2-4h','5-30.0','null','15','null', '10,15,30/tab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('temazepam (Restoril)','null','null','null','5-25h','2-3h','5-15.0','null','10','null', '15,30/cap', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('trazodone (Desyrel)','null','null','null','4-9h','2-3h','12.5-100','null','null','null', '50,75,100,150/tab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('zolpidem (Sublinox)','null','null','null','2.5-4h','1-2h','5-10.0','null','null','null', '5,10/diss tab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('zopiclone (Imovane)','null','null','null','4-7h','1.5h','3.75-12.5','null','7.5','null', '5,7.5/tab', 'null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('aripiprazole (Abilify)','null','null','null','75-94h^','null','null','null', '7.5','od','null','null','null','null','null', '2, 5, 10, 15, 20, 30/tab', '5-10mg', 'null', '2-15mg', '2-15mg', 'null', '2-20mg', '2-10mg','null','null','null','null','null','null'),
('clozapine (Clozaril)','null','null','null','14h','null','null','null', '100','hs-tid','null','null','null','null','null', '25, 50, 100, 200/tab', 'NR', '6.25-50mg', 'NR', 'NR', 'NR', '25-400mg', '25-200mg','null','null','null','null','null','null'),
('lurasidone (Latuda)‡','null','null','null','18h','null','null','null', 'null','od','null','null','null','null','null', '40, 80, 120/tab', 'NR', 'NR', 'NR', 'NR', 'NR', '? (20-80mg)', '? (20-40 mg)','null','null','null','null','null','null'),
('olanzapine (Zyprexa)','null','null','null','21-54h','null','null','null', '5','hs','null','null','null','null','null', '2.5, 5, 7.5, 10, 15, 20/inj, tab, diss tab', '2.5-15mg', 'NR', '? (2.5-10mg)', '2.5-20mg', '1.25-15mg', '2.5-20mg', '2.5-15mg','null','null','null','null','null','null'),
('paliperidone (Invega)','null','null','null','23h','null','null','null', '2','hs','null','null','null','null','null', '3, 6, 9/er tabs', 'NR', 'NR', 'NR', '?', 'NR', '3-8mg', '3-4mg','null','null','null','null','null','null'),
('quetiapine (Seroquel)','null','null','null','6-12h^','null','null','null', '150','hs-bid','null','null','null','null','null','25, 50, 100, 150, 200, 300, 400/ir&er tabs', '? (12.5-200mg)', '? (12.5-400mg)**', '25-300mg', '25-400mg', '12.5-200mg', '25-500mg', '25-300mg','null','null','null','null','null','null' ),
('risperidone (Risperdal)','null','null','null','20-24h^','null','null','null', '1.5','hs-bid','null','null','null','null','null', '0.25, 0.5, 1, 2, 3, 4/tab, diss tab, liq', '0.25-2mg**', 'NR', '? (0.5-2mg)', '? (0.5-2mg)', '0.25-3mg', '0.5-4mg', '0.5-2mg','null','null','null','null','null','null'),
('haloperidol (Haldol)','null','null','null','20h','null','null','null', '2.5','hs-bid','null','null','null','null','null','0.5, 1, 2, 5, 10, 20/inj, tab, liq', 'NR', 'NR', 'NR', 'NR', '0.25-2mg**', '0.5-5mg', '? (0.5-2mg)','null','null','null','null','null','null' ),
('Ioxapine (Loxapac)','null','null','null','5-19h^','null','null','null', '15','hs-tid','null','null','null','null','null','2.5, 5, 10, 25, 50/inj, tab, liq', '? (2.5-20mg)', 'NR', 'NR', 'NR', '5-100mg', '2-100mg', '? (2-50mg)','null','null','null','null','null','null'),
('citalopram (Celexa)**','null','null','5HT','23-45h','null','null','Initial 5-10 |Maint. 20 |Max. 20','null', 'od' , '10,20,30,40/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('escitalopram (Cipralex)**','null','null','5HT','27-32h','null','null',' ','null', 'od' , '10,20/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('fluoxetine (Prozac)','null','null','5HT','10-14d^','null','null','Initial 10 |Maint. 20-40 |Max. 40','null', 'od' , '10,20/cap,liq','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('fluvoxamine (Luvox)','null','null','5HT','9-28h','null','null','Initial 25-50 |Maint. 50-200 |Max. 200','null', 'od' , '50,100/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('paroxetine (Paxil) ♯','null','null','5HT','3-65h','null','null','Initial 10 |Maint. 20-40 |Max. 40','null', 'od' , '10,20,30,40/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('sertraline (Zoloft)**','null','null','5HT','<104h^','null','null','Initial 25 |Maint. 50-150 |Max. 200','null', 'od' , '25,50,100/cap','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('vortioxetine (Trintellix)','null','null','5HT','66h','null','null','Initial 5-10 |Maint. 10-20 |Max. 20','null', 'od' , '5-10 | 10-20 | 20','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('duloxetine (Cymbalta)**','null','null','5HT,NA','8-17h','null','null','Initial 30-60 |Maint. 60 |Max. 120','null', 'od' , '30,60/cap','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('venlafaxine XR (Effexor XR)**','null','null','5HT,NA','9-13h^','null','null','Initial 37.5 |Maint. 75-150 |Max. 300','null', 'od' , '37.5,75,150/cap','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('desvenlafaxine (Pristiq)','null','null','5-HT,NA',' ','null','null','Initial 50 |Maint. 50 |Max. 50','null', 'od' , '50,100/er tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('mirtazapine (Remeron)**','null','null','5HT,NA','20-40h','null','null','Initial 3.75-15 |Maint. 15-45 |Max. 45','null',  'hs' , '15,30,45/tab,diss tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('bupropion (Wellbutrin SR)**','null','null','NA,DA','<27h^','null','null','Initial 100 |Maint. 150-300 |Max. 300','null', 'bid' , '100,150/sr tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('bupropion (Wellbutrin XL)**','null','null','NA, DA','<27h^','null','null','Initial 150 |Maint. 150-300 |Max. 300','null', 'od' , '150,300/xl tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('desipramine (Norpramin)†','null','null',' ','12-72h','null','null','Initial 25am |Maint. 75-150 |Max. 200','null', 'bid' , '10,25,50,75,100/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('nortriptyline(Aventyl)†','null','null',' ','13-88h','null','null','Initial 10-25hs |Maint. 50-100 |Max. 100','null','hs/bid' , '10,25/cap','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('amitriptyline (Elavil)','null','null',' ','Not recommended','null','null',' ','null', ' ' , ' ','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('phenelzine (Nardil)','null','null','NA,5HT','1.5-4h','null','null','Initial 15 |Maint. 45-90 |Max. 90','null', 'b-tid' , '15/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'),
('tranylcypromine (Parnate)','null','null','NA,5HT','2-4h','null','null','Initial 10bid |Maint. 20-40 |Max. 40','null', 'am/bid' , '10/tab','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null');