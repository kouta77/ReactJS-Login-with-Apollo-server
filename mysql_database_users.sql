-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 08, 2021 at 03:47 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `username`, `email`, `password`) VALUES
(1, 'username1', 'email@email.com', '12345678'),
(7, 'username2', 'email@email2.com', '12345678'),
(8, 'username3', 'email@email3.com', '12345678'),
(10, 'username2', 'email@email5.com', '$2a$10$HecfmrrZzgvHPoMsEmEdHeYrglhmxyl85hzCif3cXyZn2EcH5AGdO'),
(12, 'username3', 'email@email7.com', '$2a$10$NWj.8U7D9/l0LNB/rMusNehE4li5CRn8jF8t6E2QASjDtleP4p6Eq'),
(13, 'mathGuy', 'math@email.com', '$2a$10$Goa014Lbxofzw1M71hPiRejz5OIVFb80liu2Zsa9jj6Kg6ro5nU.6'),
(14, 'rasputin', 'rasputin@email.com', '$2a$10$Es2XZ5XBEqjqLyqQNOMvr.XNrNeeWJa9t5FqgOXqd2gLy8ojIp4Gy');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1381261d-0905-4e84-ab14-1484d124a3b6', 'b2bcdd14cba1b0fa59a8db23e8136e3de67e15b986978d60e32fc674a1ae94f1', '2021-02-05 18:29:40.045', '20210205182939_new_user_data', NULL, NULL, '2021-02-05 18:29:39.711', 1),
('55cbc480-6bc5-4ca3-8c83-b493151973eb', '4872a5fb8c15a1a6b545dacd62991a3bbabb7fa4829c761a8c99c58f1c2fce', '2021-02-05 16:09:51.938', '20210205160951_userdata_changed', NULL, NULL, '2021-02-05 16:09:51.740', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userdata.email_unique` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
