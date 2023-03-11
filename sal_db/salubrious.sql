-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2022 at 09:29 PM
-- Server version: 5.7.24
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salubrious`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(3) NOT NULL,
  `doctor_name` varchar(255) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `reason_of_appointment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `doctor_name`, `patient_name`, `time`, `date`, `reason_of_appointment`) VALUES
(1, 'Dr. Charlene Ferreira', 'Dane Jarrett', '12:00:00', '2022-05-06', 'Hip Surgery'),
(2, 'Dr. Joel Klenovich', 'Oz Gibson', '09:00:00', '2022-04-25', 'Monthly Checkup'),
(3, 'Dr. Steven Praska', 'Rolph Garner', '13:30:00', '2022-05-12', 'Itchy Skin'),
(4, 'Dr. Charlene Ferreira', 'Joisse Linwood', '11:00:00', '2022-05-07', 'Cataract Surgery'),
(5, 'Dr. Marcella Marose', 'Toby Bentley', '10:30:00', '2022-05-12', 'Weekly Session'),
(6, 'Dr. Journey Capone', 'Linnaea Austin', '12:30:00', '2022-05-01', 'Upset Stomach'),
(7, 'Dr. Nolan Utsey', 'Derren Reynell', '15:00:00', '2022-06-01', 'Cardiovascular checkup'),
(8, 'Dr. Ruby Swoyer', 'Trace Spearing', '08:00:00', '2022-06-04', 'Monthly Checkup'),
(9, 'Dr. Ruby Swoyer', 'Hendry Baker', '14:00:00', '2022-06-30', 'Checkup for legs'),
(10, 'Dr. Marcella Marose', 'Nolan Dias', '16:00:00', '2022-06-29', 'Checkup');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(3) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` varchar(3) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `doctor_id` int(4) NOT NULL,
  `specialisation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `doctor_id`, `specialisation`) VALUES
(1, '', 'Charlene ', 'Ferreira', '21', 'F', 'cferreira@salubrious.co.za', 'e11vmpwd', '0852164835', 4224, 'Surgeon'),
(2, '', 'Steven', 'Praska', '34', 'M', 'spraska@salubrious.co.za', 'jfe#dcS543', '0831571349', 2388, 'Dermatologist'),
(3, '', 'Joel', 'Klenovich', '55', 'M', 'joelk@salubrious.co.za', 'fndjU31', '0828336961', 6682, 'General Practitioner'),
(4, '', 'Marcella', 'Marose', '28', 'F', 'marosem@salubrious.co.za', 'WB000616ly', '0856127159', 9437, 'Psychiatrist'),
(5, '', 'Nolan', 'Utsey', '62', 'M', 'nolanutsey@salubrious.co.za', 'ed443#wdes', '0829022715', 8940, 'Cardiologist'),
(6, '', 'Ruby', 'Swoyer', '36', 'F', 'rubyswoyer@salubrious.co.za', 'oBILISKr3QUEST', '0832061804', 1784, 'Endocrinologist'),
(7, '', 'Journey', 'Capone', '45', 'F', 'journeycap@salubrious.co.za', 'DdkeodP321#', '0839776192', 3609, 'Gastroenterologist'),
(10, '', 'Johnny', 'Ferreira', '20', 'M', '', '', '0765587448', 6527, 'Neurosurgeon'),
(11, '', 'Hannah', 'Baker', '25', 'F', '', '', '0542132215', 1234, 'Surgeon');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(4) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `patient_id` varchar(255) NOT NULL,
  `medical_aid_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `patient_id`, `medical_aid_number`) VALUES
(1, '', 'Joisse', 'Linwood', 16, 'F', 'joylinn@gmail.com', 'someone8th3nuggeTs', '0854468830', '5242', 'SAL3920384'),
(2, '', 'Jake', 'Brent', 27, 'M', 'jakebrent@gmail.com', 'JB453@br3nt', '0822257165', '3628', 'SAL1731828'),
(3, '', 'Natille', 'Hayward', 83, 'F', 'nhayward@gmail.com', '948HdbdjdyuW', '0832249925', '1676', 'SAL2038162\r\n'),
(4, '', 'Dane ', 'Jarrett', 83, 'M', 'djarrett83@gmail.com', 'Kfj09*djnS', '0857528392', '3551', 'SAL2833460'),
(5, '', 'Rolph ', 'Garner', 46, 'M', 'rgarner1975@gmail.com', 'rGarner1975', '0859883654', '4525', 'SAL2831027'),
(6, '', 'Robby ', 'Hanson', 25, 'M', 'hansonrob@gmail.com', 'Te#c6XIiFPA%1!2#', '0853773749', '1037', 'SAL2808450\r\n'),
(7, '', 'Samantha', 'Carver', 71, 'F', 'samcarver@gmail.com', 'Kpe$9hhrBU9oUWVZ', '0848908179', '3995\r\n', 'SAL2330020'),
(8, '', 'Linnaea ', 'Austin', 91, 'F', 'laustin@gmail.com', 'VAUbH$2a$VMw6oq5', '0838007961', '1911', 'SAL1856085\r\n'),
(9, '', 'Kennedy', 'Bagley', 45, 'M', 'kbagley@gmail.com', 'Irlbjh5tXNV?3zr%', '0841228007', '4254\r\n', 'SAL2781938\r\n'),
(10, '', 'Jem ', 'Tyrrell', 71, 'F', 'gemtyrell@gmail.com', 'ldr2P8l$Jv', '0851487528', '4574', 'SAL1341185'),
(11, '', 'Toby', 'Bentley', 71, 'M', 'tbentley23@gmail.com', '4F&NH54ToI', '0853054927', '2922', 'SAL2298194\r\n'),
(12, '', 'Derren ', 'Reynell', 25, 'M', 'dreynell@gmail.com', 'NfZeVZ8-=P', '0853488781', '3708\r\n', 'SAL2725833\r\n'),
(13, '', 'Trace ', 'Spearing', 46, 'F', 'trace.spearing@gmail.com', 'j*1s77M-@A', '0844466555', '2677\r\n', 'SAL2257703'),
(14, '', 'Oz ', 'Gibson', 83, 'M', 'ozgibson@gmail.com', '&@%S#zSF3g', '0854347274', '4369\r\n', 'SAL1605726\r\n'),
(15, '', 'Eileen', 'Arrington', 48, 'F', 'eileenarrington.e@gmail.com', 'f5CTKOw^#s', '0838126445', '3121', 'SAL2168586\r\n'),
(18, '', 'John', 'Cena', 45, 'M', 'cantseeme@gmail..com', '', '0767763456', '1265', 'SAL291992'),
(19, '', 'Greg', 'Stacy', 35, 'M', 'greg.stacy@gmail.com', '', '0765423456', '2378', 'SAL382125');

-- --------------------------------------------------------

--
-- Table structure for table `receptionists`
--

CREATE TABLE `receptionists` (
  `id` int(2) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rank` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `receptionists`
--

INSERT INTO `receptionists` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `phone_number`, `email`, `password`, `rank`) VALUES
(1, 'profiles/1656306716,jpg', 'Jane', 'Lambert', 31, 'F', '0767437582', 'jane.lambert@salubrious.co.za', 'ad8fa9de03c9f943cadba8379a65658f', 'Head Receptionist'),
(2, '', 'Carole', 'Kennedy', 24, 'F', '0719864456', 'carol.kennedy@salubrious.co.za', 'ad8fa9de03c9f943cadba8379a65658f', 'Receptionist'),
(3, '', 'Jo-Anne', 'Layfield', 42, 'F', '0628897432', 'joanne.layfield@salubrious.co.za', 'ad8fa9de03c9f943cadba8379a65658f', 'Receptionist'),
(9, 'profiles/1656360877.jpg', 'Karl', 'Henry', 35, 'M', '0670876995', 'karlhenry@gmail.com', 'ad8fa9de03c9f943cadba8379a65658f', 'Receptionist');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(3) NOT NULL,
  `doctor` varchar(255) NOT NULL,
  `room_number` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `doctor`, `room_number`) VALUES
(1, 'Dr. Charlene Ferreira', 1),
(2, 'Dr. Steven Praska', 2),
(3, 'Dr. Joel Klenovich', 3),
(4, 'Dr. Marcella Marose', 4),
(5, 'Dr. Nolan Utsey', 5),
(6, 'Dr. Ruby Swoyer', 6),
(7, 'Dr. Journey Capone', 7);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`) VALUES
(69, 'ander naam'),
(69, 'ander naam'),
(69, 'ander naam'),
(69, 'ander naam'),
(69, 'ander naam'),
(69, 'ander naam');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receptionists`
--
ALTER TABLE `receptionists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `receptionists`
--
ALTER TABLE `receptionists`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
