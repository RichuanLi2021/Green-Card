-- Schema green_card
DROP SCHEMA IF EXISTS `green_card` ;
-- Schema green_card
CREATE SCHEMA IF NOT EXISTS `green_card`;
USE `green_card` ;

ALTER DATABASE green_card
CHARACTER SET utf8
COLLATE utf8_general_ci;
-- -----------------------------------------------------
-- Table `green_card`.`user_model`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`user_model` ;

CREATE TABLE IF NOT EXISTS `green_card`.`user_model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(256) NULL DEFAULT NULL,
  `password` VARCHAR(256) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTIPSYCHOTICS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTIPSYCHOTICS GUIDE` ;
-- table
CREATE TABLE IF NOT EXISTS `green_card`.`ANTIPSYCHOTICS GUIDE` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NOT NULL,
  `Approx. equiv. dose` VARCHAR(256) NULL,
  `Half-life` VARCHAR(120) NULL,
  `Frequency` VARCHAR(256) NULL,
  `Tab Strength/Form Supplied` VARCHAR(256) NULL,
  `NPS` VARCHAR(256) NULL,
  `PP` VARCHAR(256) NULL,
  `MDE (ADaugment)` VARCHAR(256) NULL,
  `MDE (w.psychosis)` VARCHAR(256) NULL,
  `Delirium` VARCHAR(256) NULL,
  `EO-SCZ` VARCHAR(256) NULL,
  `LO-SCZ` VARCHAR(256) NULL,
  PRIMARY KEY (`id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`COGNITIVE ENHANCERS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`COGNITIVE ENHANCERS GUIDE` ;
-- table split into two on frontend 1. Name -> With Food | 2. MCI -> DSD
CREATE TABLE IF NOT EXISTS `green_card`.`COGNITIVE ENHANCERS GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NOT NULL,
  `Action` VARCHAR(256) NULL,
  `Half-life` VARCHAR(256) NULL,
  `Dose (initial/monthly increment/maint)` VARCHAR(256) NULL,
  `Frequency` VARCHAR(256) NULL,
  `mg/form supplied` VARCHAR(256) NULL,
  `With food` VARCHAR(256) NULL,
  `MCI` VARCHAR(256) NULL,
  `mild-mod Alz` VARCHAR(256) NULL,
  `Severe Alz` VARCHAR(256) NULL,
  `Mixed (Alz+vas)` VARCHAR(256) NULL,
  `Vascular` VARCHAR(256) NULL,
  `LBD` VARCHAR(256) NULL,
  `FTD` VARCHAR(256) NULL,
  `PD` VARCHAR(256) NULL,
  `DSD` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );

  -- -----------------------------------------------------
-- Table `green_card`.`LIST HEADERS`
-- -----------------------------------------------------
-- Drop tables if they exist
DROP TABLE IF EXISTS `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE`;
DROP TABLE IF EXISTS `green_card`.`LIST HEADERS`;

-- Create `LIST HEADERS` table
CREATE TABLE IF NOT EXISTS `green_card`.`LIST HEADERS` (
  `Id` VARCHAR(12) NOT NULL,
  `Name` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
);

-- Create `COGNITIVE ENHANCERS CLINICAL GUIDE` table
CREATE TABLE IF NOT EXISTS `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`LIST_HEADERS_Id`) REFERENCES `green_card`.`LIST HEADERS`(`Id`)
);



-- -----------------------------------------------------
-- Table `green_card`.`INSOMNIA MANAGEMENT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`INSOMNIA MANAGEMENT` ;
-- list
CREATE TABLE IF NOT EXISTS `green_card`.`INSOMNIA MANAGEMENT` (
  `Id` INT NOT NULL auto_increment,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (LIST_HEADERS_Id) REFERENCES `LIST HEADERS`(Id)
  );


-- -----------------------------------------------------
-- Table `green_card`.`SEDATIVES/HYPNOTICS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`SEDATIVES/HYPNOTICS GUIDE` ;
-- table
CREATE TABLE IF NOT EXISTS `green_card`.`SEDATIVES/HYPNOTICS GUIDE` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NOT NULL,
  `Dose equiv.` VARCHAR(256) NULL,
  `Time to peak in plasma` VARCHAR(256) NULL,
  `Half-life` VARCHAR(256) NULL,
  `Avg dose range (mg/day)` VARCHAR(256) NULL,
  `mg/Form supplied` VARCHAR(256) NULL,
  PRIMARY KEY (`ID`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`SEDATIVES/HYPNOTICS CLINICAL GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`SEDATIVES/HYPNOTICS CLINICAL GUIDE` ;
-- list
CREATE TABLE IF NOT EXISTS `green_card`.`SEDATIVES/HYPNOTICS CLINICAL GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS` VARCHAR(256) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );

-- -----------------------------------------------------
-- Table `green_card`.`SEDATIVES/HYPNOTIC SAFETY CONCERNS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`SEDATIVES/HYPNOTIC SAFETY CONCERNS` ;
-- list
CREATE TABLE IF NOT EXISTS `green_card`.`SEDATIVES/HYPNOTIC SAFETY CONCERNS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );

-- -----------------------------------------------------
-- Table `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES` ;

CREATE TABLE IF NOT EXISTS `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Duration` VARCHAR(256) NULL,
  `Dose Reduction Schedule Duration (weeks)` VARCHAR(256) NULL,
  `Interval Between Dose Reductions (weeks)` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );

-- -----------------------------------------------------
-- Table `green_card`.`DELIRIUM MANAGEMENT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`DELIRIUM_MANAGEMENT` ;

CREATE TABLE IF NOT EXISTS `green_card`.`DELIRIUM_MANAGEMENT` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `High` VARCHAR(256) NULL,
  `Medium` VARCHAR(256) NULL,
  `Low` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
);

-- -----------------------------------------------------
-- Table `green_card`.`MOOD STABILIZERS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`MOOD STABILIZERS GUIDE` ;

CREATE TABLE IF NOT EXISTS `green_card`.`MOOD STABILIZERS GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NULL,
  `Half-life` VARCHAR(256) NULL,
  `Dose (mg/day) Initial | Maint. | Max.` VARCHAR(256) NULL,
  `Frequency` VARCHAR(256) NULL,
  `mg/Form Supplied` VARCHAR(256) NULL,
  `Monitoring Level` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`PSYCHOTROPIC MONITORING`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`PSYCHOTROPIC MONITORING` ;

CREATE TABLE IF NOT EXISTS `green_card`.`PSYCHOTROPIC MONITORING` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NULL,
  `Antipsychotics` VARCHAR(256) NULL,
  `Lithium` VARCHAR(256) NULL,
  `Valproate` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT` ;

CREATE TABLE IF NOT EXISTS `green_card`.`NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (LIST_HEADERS_Id) REFERENCES `LIST HEADERS`(Id)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ECT & PSYCHOACTIVE MEDICATIONS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ECT & PSYCHOACTIVE MEDICATIONS` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ECT & PSYCHOACTIVE MEDICATIONS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Medication` VARCHAR(256) NULL,
  `Recommended Action` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ANTIDEPRESSANT CLINICAL GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS` VARCHAR(256) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`COMMON DDIs WITH PSYCHOTROPICS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`COMMON DDIs WITH PSYCHOTROPICS` ;

CREATE TABLE IF NOT EXISTS `green_card`.`COMMON DDIs WITH PSYCHOTROPICS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTIPSYCHOTIC SAFETY CONCERNS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTIPSYCHOTIC SAFETY CONCERNS` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ANTIPSYCHOTIC SAFETY CONCERNS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`PRESCRIBING AND DEPRESCRIBING PRINCIPLES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`PRESCRIBING AND DEPRESCRIBING PRINCIPLES` ;

CREATE TABLE IF NOT EXISTS `green_card`.`PRESCRIBING AND DEPRESCRIBING PRINCIPLES` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
 
  );


-- -----------------------------------------------------
-- Table `green_card`.`NOTABLE CHANGES IN OLDER ADULTS THAT AFFECT PRESCRIBING`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`NOTABLE CHANGES IN OLDER ADULTS THAT AFFECT PRESCRIBING` ;

CREATE TABLE IF NOT EXISTS `green_card`.`NOTABLE CHANGES IN OLDER ADULTS THAT AFFECT PRESCRIBING` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
 
  );


-- -----------------------------------------------------
-- Table `green_card`.`DELIRIUM MANAGEMENT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`DELIRIUM MANAGEMENT` ;

CREATE TABLE IF NOT EXISTS `green_card`.`DELIRIUM MANAGEMENT` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS_Id` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (LIST_HEADERS_Id) REFERENCES `LIST HEADERS`(Id)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTICHOLINERGIC ACTIVITY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTICHOLINERGIC ACTIVITY` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ANTICHOLINERGIC ACTIVITY` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `LIST_HEADERS` VARCHAR(12) NOT NULL,
  `Description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`ANTIDEPRESSANTS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`ANTIDEPRESSANTS GUIDE` ;

CREATE TABLE IF NOT EXISTS `green_card`.`ANTIDEPRESSANTS GUIDE` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NULL,
  `Primary NT` VARCHAR(256) NULL,
  `Half-life` VARCHAR(256) NULL,
  `Dose (mg/day) Initial | Maint. | Max.` VARCHAR(256) NULL,
  `Frequency` VARCHAR(256) NULL,
  `mg/Form Supplied` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );


-- -----------------------------------------------------
-- Table `green_card`.`COGNITIVE ENHANCERS GUIDE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_card`.`SEARCH RESULTS` ;
-- table split into two on frontend 1. Name -> With Food | 2. MCI -> DSD
CREATE TABLE IF NOT EXISTS `green_card`.`SEARCH RESULTS` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(256) NOT NULL,
  `Monitoring Level` VARCHAR(256) NULL,
  `Action` VARCHAR(256) NULL,
  `Primary NT` VARCHAR(256) NULL,
  `Half-life` VARCHAR(256) NULL,
  `Time to peak in plasma` VARCHAR(256) NULL,
  `Avg dose range (mg/day)` VARCHAR(256) NULL,
  `Dose (initial/monthly increment/maint)` VARCHAR(256) NULL,
  `Dose equiv.` VARCHAR(256) NULL,
  `Frequency` VARCHAR(256) NULL,
  `mg/form supplied` VARCHAR(256) NULL,
  `With food` VARCHAR(256) NULL,
  `MCI` VARCHAR(256) NULL,
  `mild-mod Alz` VARCHAR(256) NULL,
  `Severe Alz` VARCHAR(256) NULL,
  `Tab Strength/Form Supplied` VARCHAR(256) NULL,
  `NPS` VARCHAR(256) NULL,
  `PP` VARCHAR(256) NULL,
  `MDE (ADaugment)` VARCHAR(256) NULL,
  `MDE (w.psychosis)` VARCHAR(256) NULL,
  `Delirium` VARCHAR(256) NULL,
  `EO-SCZ` VARCHAR(256) NULL,
  `LO-SCZ` VARCHAR(256) NULL,
  `Mixed (Alz+vas)` VARCHAR(256) NULL,
  `Vascular` VARCHAR(256) NULL,
  `LBD` VARCHAR(256) NULL,
  `FTD` VARCHAR(256) NULL,
  `PD` VARCHAR(256) NULL,
  `DSD` VARCHAR(256) NULL,
  PRIMARY KEY (`Id`)
  );
