-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 14-03-2023 a les 12:28:31
-- Versió del servidor: 10.4.27-MariaDB
-- Versió de PHP: 8.2.0

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";
/*BBDD assitencies */

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `assistencies`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `1ra`
--

CREATE TABLE `1ra` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(14) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `1ra`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `1rb`
--

CREATE TABLE `1rb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(21) DEFAULT NULL,
  `Primer_Cognom` varchar(8) DEFAULT NULL,
  `Segon_Cognom` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `1rb`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `2na`
--

CREATE TABLE `2na` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(16) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `2na`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `2nb`
--

CREATE TABLE `2nb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(15) DEFAULT NULL,
  `Primer_Cognom` varchar(11) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `2nb`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `3ra`
--

CREATE TABLE `3ra` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(14) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `3ra`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `3rb`
--

CREATE TABLE `3rb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(17) DEFAULT NULL,
  `Primer_Cognom` varchar(9) DEFAULT NULL,
  `Segon_Cognom` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `3rb`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `4ra`
--

CREATE TABLE `4ra` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(18) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `4ra`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `4rb`
--

CREATE TABLE `4rb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(17) DEFAULT NULL,
  `Primer_Cognom` varchar(12) DEFAULT NULL,
  `Segon_Cognom` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `4rb`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `4rc`
--

CREATE TABLE `4rc` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(16) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `4rc`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `5ea`
--

CREATE TABLE `5ea` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(13) DEFAULT NULL,
  `Primer_Cognom` varchar(11) DEFAULT NULL,
  `Segon_Cognom` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `5ea`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `5eb`
--

CREATE TABLE `5eb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(15) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `5eb`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `6ea`
--

CREATE TABLE `6ea` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(16) DEFAULT NULL,
  `Primer_Cognom` varchar(10) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `6ea`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `6eb`
--

CREATE TABLE `6eb` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(14) DEFAULT NULL,
  `Primer_Cognom` varchar(9) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `6eb`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `i3a`
--

CREATE TABLE `i3a` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(17) DEFAULT NULL,
  `Primer_Cognom` varchar(11) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL,
  `09/03/2023` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i3a`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `i3b`
--

CREATE TABLE `i3b` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(16) DEFAULT NULL,
  `Primer_Cognom` varchar(11) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i3b`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `i4a`
--

CREATE TABLE `i4a` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(17) DEFAULT NULL,
  `Primer_Cognom` varchar(12) DEFAULT NULL,
  `Segon_Cognom` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i4a`
--



-- --------------------------------------------------------

--
-- Estructura de la taula `i4b`
--

CREATE TABLE `i4b` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(16) DEFAULT NULL,
  `Primer_Cognom` varchar(11) DEFAULT NULL,
  `Segon_Cognom` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i4b`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `i5a`
--

CREATE TABLE `i5a` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(18) DEFAULT NULL,
  `Primer_Cognom` varchar(9) DEFAULT NULL,
  `Segon_Cognom` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i5a`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `i5b`
--

CREATE TABLE `i5b` (
  `Num` int(2) DEFAULT NULL,
  `Nom` varchar(17) DEFAULT NULL,
  `Primer_Cognom` varchar(8) DEFAULT NULL,
  `Segon_Cognom` varchar(9) DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Bolcament de dades per a la taula `i5b`
--


-- --------------------------------------------------------

--
-- Estructura de la taula `usuaris`
--

CREATE TABLE `usuaris` (
  `ID` int(11) NOT NULL,
  `USUARI` varchar(40) NOT NULL,
  `CONTRASENYA` varchar(256) NOT NULL,
  `TIPUSUSUARI` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Bolcament de dades per a la taula `usuaris`
--

INSERT INTO `usuaris` (`ID`, `USUARI`, `CONTRASENYA`, `TIPUSUSUARI`) VALUES
(1, 'Marc', '$2y$10$6v.4r6avSxRJoMSiebLCJ..Ww/t61ROzgcBVtnDIyezZorJuqOvDy', 'Administrador');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
