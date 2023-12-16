import React, { Suspense, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SeoServicesSubpage from './components/Servicepages/ServicesSubPages/SeoServicesSubpage';
import PPCServicesSubpage from './components/Servicepages/ServicesSubPages/PPCServicesSubpage';
import DesignandDevelopmentSubpage from './components/Servicepages/ServicesSubPages/DesignandDevelopmentSubpage';
import ContentMarketingSubpage from './components/Servicepages/ServicesSubPages/ContentMarketingSubpage';
import Whatsappchat from './components/LandingPages/Whatsappchat';
import ErrorPage from './components/LandingPages/ErrorPage';
import PopUps from './components/Pages/PopUps';
const Loader = React.lazy(() => import('./components/Pages/Loader'));
const MedicalEquipmentComponent = React.lazy(() => import('./components/BlogPages/BlogSubPages/MedicalEquipmentComponent'));
const FoodDeliveryServices = React.lazy(() => import('./components/BlogPages/FoodDeliveryServices'));
const GarageDoorRepair = React.lazy(() => import('./components/BlogPages/BlogSubPages/GarageDoorRepair'));
const Customs = React.lazy(() => import('./components/BlogPages/BlogSubPages/Customs'));
const ServiceMainPage = React.lazy(() => import('./components/Servicepages/ServiceMainPage'));
const About = React.lazy(() => import('./components/LandingPages/About'));
const Service = React.lazy(() => import('./components/Servicepages/Service'));
const Contact = React.lazy(() => import('./components/LandingPages/Contact'));
const Home = React.lazy(() => import('./components/LandingPages/Home'));
const PrivacyandPolicy = React.lazy(() => import('./components/LandingPages/PrivacyandPolicy'));
const TermsandCondition = React.lazy(() => import('./components/LandingPages/TermsandCondition'));
const Blog = React.lazy(() => import('./components/LandingPages/Blog'));
const Porfolio = React.lazy(() => import('./components/LandingPages/Porfolio'));
// const ServiceDetails = React.lazy(() => import('./components/ServiceDetailspages/ServiceDetails'));
const Footer = React.lazy(() => import('./components/LandingPages/Footer'));
const Finance = React.lazy(() => import('./components/BlogPages/Finance'));
const Education = React.lazy(() => import('./components/BlogPages/Education'));
const FoodAndBeverage = React.lazy(() => import('./components/BlogPages/FoodAndBeverage'));
const Franchises = React.lazy(() => import('./components/BlogPages/Franchises'));
const HeavyEquipment = React.lazy(() => import('./components/BlogPages/HeavyEquipment'));
const AutoManufacturing = React.lazy(() => import('./components/BlogPages/BlogSubPages/AutoManufacturing'));
const AutoRepairs = React.lazy(() => import('./components/BlogPages/BlogSubPages/AutoRepairs'));
const Autoservice = React.lazy(() => import('./components/BlogPages/BlogSubPages/Autoservice'));
const Motorcycle = React.lazy(() => import('./components/BlogPages/BlogSubPages/Motorcycle'));
const TruckandTrailer = React.lazy(() => import('./components/BlogPages/BlogSubPages/TruckandTrailer'));
const CarDealer = React.lazy(() => import('./components/BlogPages/BlogSubPages/CarDealer'));
const Collages = React.lazy(() => import('./components/BlogPages/BlogSubPages/Collages'));
const HigherEducation = React.lazy(() => import('./components/BlogPages/BlogSubPages/HigherEducation'));
const DayCares = React.lazy(() => import('./components/BlogPages/BlogSubPages/DayCares'));
const TechnicalSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/TechnicalSchools'));
const OnlineEducation = React.lazy(() => import('./components/BlogPages/BlogSubPages/OnlineEducation'));
const Accounting = React.lazy(() => import('./components/BlogPages/BlogSubPages/Accounting'));
const Banks = React.lazy(() => import('./components/BlogPages/BlogSubPages/Banks'));
const CPAFirms = React.lazy(() => import('./components/BlogPages/BlogSubPages/CPAFirms'));
const CreditServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/CreditServices'));
const CreditUnions = React.lazy(() => import('./components/BlogPages/BlogSubPages/CreditUnions'));
const LoanOfficer = React.lazy(() => import('./components/BlogPages/BlogSubPages/LoanOfficer'));
const WealthManagement = React.lazy(() => import('./components/BlogPages/BlogSubPages/WealthManagement'));
const FinancialAdvisors = React.lazy(() => import('./components/BlogPages/BlogSubPages/FinancialAdvisors'));
const Bakeries = React.lazy(() => import('./components/BlogPages/BlogSubPages/Bakeries'));
const Breweries = React.lazy(() => import('./components/BlogPages/BlogSubPages/Breweries'));
const Cafes = React.lazy(() => import('./components/BlogPages/BlogSubPages/Cafes'));
const FoodProducts = React.lazy(() => import('./components/BlogPages/BlogSubPages/FoodProducts'));
const Speciality = React.lazy(() => import('./components/BlogPages/BlogSubPages/Speciality'));
const Bars = React.lazy(() => import('./components/BlogPages/BlogSubPages/Bars'));
const Resturents = React.lazy(() => import('./components/BlogPages/BlogSubPages/Resturents'));
const OnlineFood = React.lazy(() => import('./components/BlogPages/BlogSubPages/OnlineFood'));
const SearchEngine = React.lazy(() => import('./components/BlogPages/BlogSubPages/SearchEngine'));
const WebDesign = React.lazy(() => import('./components/BlogPages/BlogSubPages/WebDesign'));
const SocialMedia = React.lazy(() => import('./components/BlogPages/BlogSubPages/SocialMedia'));
const Resturentfrenchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/Resturentfrenchise'));
const RetailFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/RetailFranchise'));
const AutoMotiveFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/AutoMotiveFranchise'));
const HealthWellness = React.lazy(() => import('./components/BlogPages/BlogSubPages/HealthWellness'));
const EducationFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/EducationFranchise'));
const Cleaning = React.lazy(() => import('./components/BlogPages/BlogSubPages/Cleaning'));
const HomeFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeFranchise'));
const TrevelFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/TrevelFranchise'));
const SeniorFranchise = React.lazy(() => import('./components/BlogPages/BlogSubPages/SeniorFranchise'));
const Forlift = React.lazy(() => import('./components/BlogPages/BlogSubPages/Forlift'));
const Excavation = React.lazy(() => import('./components/BlogPages/BlogSubPages/Excavation'));
const Paving = React.lazy(() => import('./components/BlogPages/BlogSubPages/Paving'));
const Equipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/Equipment'));
const LogisticsAndTransportation = React.lazy(() => import('./components/BlogPages/LogisticsAndTransportation'));
const Industrial = React.lazy(() => import('./components/BlogPages/Industrial'));
const Insurance = React.lazy(() => import('./components/BlogPages/Insurance'));
const HomeandRepire = React.lazy(() => import('./components/BlogPages/HomeandRepire'));
const Legal = React.lazy(() => import('./components/BlogPages/Legal'));
const LocalConsumer = React.lazy(() => import('./components/BlogPages/LocalConsumer'));
const Fitness = React.lazy(() => import('./components/BlogPages/Fitness'));
const MedicalandHealth = React.lazy(() => import('./components/BlogPages/MedicalandHealth'));
const ProfessionalServices = React.lazy(() => import('./components/BlogPages/ProfessionalServices'));
const RealEstate = React.lazy(() => import('./components/BlogPages/RealEstate'));
const Recreation = React.lazy(() => import('./components/BlogPages/Recreation'));
const Retail = React.lazy(() => import('./components/BlogPages/Retail'));
const Tech = React.lazy(() => import('./components/BlogPages/Tech'));
const TourismAndHospitality = React.lazy(() => import('./components/BlogPages/TourismAndHospitality'));
const Manufacturing = React.lazy(() => import('./components/BlogPages/Manufacturing'));
const Fashion = React.lazy(() => import('./components/BlogPages/Fashion'));
const CarandTexiServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/CarandTexiServices'));
const Freight = React.lazy(() => import('./components/BlogPages/BlogSubPages/Freight'));
const Trucking = React.lazy(() => import('./components/BlogPages/BlogSubPages/Trucking'));
const AirCargo = React.lazy(() => import('./components/BlogPages/BlogSubPages/AirCargo'));
const Shipping = React.lazy(() => import('./components/BlogPages/BlogSubPages/Shipping'));
const Courier = React.lazy(() => import('./components/BlogPages/BlogSubPages/Courier'));
const WareHousing = React.lazy(() => import('./components/BlogPages/BlogSubPages/WareHousing'));
const Solar = React.lazy(() => import('./components/BlogPages/BlogSubPages/Solar'));
const Renewable = React.lazy(() => import('./components/BlogPages/BlogSubPages/Renewable'));
const Refrigeration = React.lazy(() => import('./components/BlogPages/BlogSubPages/Refrigeration'));
const Limber = React.lazy(() => import('./components/BlogPages/BlogSubPages/Limber'));
const Mining = React.lazy(() => import('./components/BlogPages/BlogSubPages/Mining'));
const OilandGas = React.lazy(() => import('./components/BlogPages/BlogSubPages/OilandGas'));
const Planting = React.lazy(() => import('./components/BlogPages/BlogSubPages/Planting'));
const WellDriling = React.lazy(() => import('./components/BlogPages/BlogSubPages/WellDriling'));
const Cabinet = React.lazy(() => import('./components/BlogPages/BlogSubPages/Cabinet'));
const IndusrtialEquipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/IndusrtialEquipment'));
const Machinery = React.lazy(() => import('./components/BlogPages/BlogSubPages/Machinery'));
const IndustrialAutomation = React.lazy(() => import('./components/BlogPages/BlogSubPages/IndustrialAutomation'));
const IndustrialSupplies = React.lazy(() => import('./components/BlogPages/BlogSubPages/IndustrialSupplies'));
const MaintanceRepair = React.lazy(() => import('./components/BlogPages/BlogSubPages/MaintanceRepair'));
const SafetyProduct = React.lazy(() => import('./components/BlogPages/BlogSubPages/SafetyProduct'));
const WasteProduct = React.lazy(() => import('./components/BlogPages/BlogSubPages/WasteProduct'));
const EngineeringServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/EngineeringServices'));
const CleaningServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/CleaningServices'));
const TraningEducation = React.lazy(() => import('./components/BlogPages/BlogSubPages/TraningEducation'));
const HomeImprovement = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeImprovement'));
const HomeEnergy = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeEnergy'));
const HomeBuilder = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeBuilder'));
const HomeSecurity = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeSecurity'));
const ChimneyAndMasonry = React.lazy(() => import('./components/BlogPages/BlogSubPages/ChimneyAndMasonry'));
const BathroomRemodel = React.lazy(() => import('./components/BlogPages/BlogSubPages/BathroomRemodel'));
const TreeCare = React.lazy(() => import('./components/BlogPages/BlogSubPages/TreeCare'));
const LandScaping = React.lazy(() => import('./components/BlogPages/BlogSubPages/LandScaping'));
const MovingCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/MovingCompanies'));
const PestControl = React.lazy(() => import('./components/BlogPages/BlogSubPages/PestControl'));
const DeckBuilder = React.lazy(() => import('./components/BlogPages/BlogSubPages/DeckBuilder'));
const Electrician = React.lazy(() => import('./components/BlogPages/BlogSubPages/Electrician'));
const Flooring = React.lazy(() => import('./components/BlogPages/BlogSubPages/Flooring'));
const GarageDoors = React.lazy(() => import('./components/BlogPages/BlogSubPages/GarageDoors'));
const Plumber = React.lazy(() => import('./components/BlogPages/BlogSubPages/Plumber'));
const Roofing = React.lazy(() => import('./components/BlogPages/BlogSubPages/Roofing'));
const Restoration = React.lazy(() => import('./components/BlogPages/BlogSubPages/Restoration'));
const HVAC = React.lazy(() => import('./components/BlogPages/BlogSubPages/HVAC'));
const CellPhoneRepair = React.lazy(() => import('./components/BlogPages/BlogSubPages/CellPhoneRepair'));
const ComputerRetail = React.lazy(() => import('./components/BlogPages/BlogSubPages/ComputerRetail'));
const MovingServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/MovingServices'));
const LockSmith = React.lazy(() => import('./components/BlogPages/BlogSubPages/LockSmith'));
const FenceInstaller = React.lazy(() => import('./components/BlogPages/BlogSubPages/FenceInstaller'));
const GroceryDeliveryServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/GroceryDeliveryServices'));
const WindowAndDoor = React.lazy(() => import('./components/BlogPages/BlogSubPages/WindowAndDoor'));
const InteriorDesignServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/InteriorDesignServices'));
const HandyManServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/HandyManServices'));
const Financial = React.lazy(() => import('./components/BlogPages/BlogSubPages/Financial'));
const Health = React.lazy(() => import('./components/BlogPages/BlogSubPages/Health'));
const Business = React.lazy(() => import('./components/BlogPages/BlogSubPages/Business'));
const AutoInsurance = React.lazy(() => import('./components/BlogPages/BlogSubPages/AutoInsurance'));
const TravelInsurance = React.lazy(() => import('./components/BlogPages/BlogSubPages/TravelInsurance'));
const HomeInsurance = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeInsurance'));
const DisabilityInsurance = React.lazy(() => import('./components/BlogPages/BlogSubPages/DisabilityInsurance'));
const PersonalInjuryLawyers = React.lazy(() => import('./components/BlogPages/BlogSubPages/PersonalInjuryLawyers'));
const Criminal = React.lazy(() => import('./components/BlogPages/BlogSubPages/Criminal'));
const FamiliyLaw = React.lazy(() => import('./components/BlogPages/BlogSubPages/FamiliyLaw'));
const Bankruptcy = React.lazy(() => import('./components/BlogPages/BlogSubPages/Bankruptcy'));
const Immigration = React.lazy(() => import('./components/BlogPages/BlogSubPages/Immigration'));
const EstatePlanning = React.lazy(() => import('./components/BlogPages/BlogSubPages/EstatePlanning'));
const Assisted = React.lazy(() => import('./components/BlogPages/BlogSubPages/Assisted'));
const Auctioneers = React.lazy(() => import('./components/BlogPages/BlogSubPages/Auctioneers'));
const Catering = React.lazy(() => import('./components/BlogPages/BlogSubPages/Catering'));
const EventPlanner = React.lazy(() => import('./components/BlogPages/BlogSubPages/EventPlanner'));
const Florist = React.lazy(() => import('./components/BlogPages/BlogSubPages/Florist'));
const Funeral = React.lazy(() => import('./components/BlogPages/BlogSubPages/Funeral'));
const Vaterinarians = React.lazy(() => import('./components/BlogPages/BlogSubPages/Vaterinarians'));
const Janitors = React.lazy(() => import('./components/BlogPages/BlogSubPages/Janitors'));
const PrivateInvestigator = React.lazy(() => import('./components/BlogPages/BlogSubPages/PrivateInvestigator'));
const StorageFacilities = React.lazy(() => import('./components/BlogPages/BlogSubPages/StorageFacilities'));
const AlternativeMedicine = React.lazy(() => import('./components/BlogPages/BlogSubPages/AlternativeMedicine'));
const Audioligy = React.lazy(() => import('./components/BlogPages/BlogSubPages/Audioligy'));
const BioTechnology = React.lazy(() => import('./components/BlogPages/BlogSubPages/BioTechnology'));
const Cardiology = React.lazy(() => import('./components/BlogPages/BlogSubPages/Cardiology'));
const Fertility = React.lazy(() => import('./components/BlogPages/BlogSubPages/Fertility'));
const Dentists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Dentists'));
const Dermatology = React.lazy(() => import('./components/BlogPages/BlogSubPages/Dermatology'));
const DoctorsOffices = React.lazy(() => import('./components/BlogPages/BlogSubPages/DoctorsOffices'));
const EarNoseThroat = React.lazy(() => import('./components/BlogPages/BlogSubPages/EarNoseThroat'));
const EHRCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/EHRCompanies'));
const MedicalImagining = React.lazy(() => import('./components/BlogPages/BlogSubPages/MedicalImagining'));
const MentalAndBehavioral = React.lazy(() => import('./components/BlogPages/BlogSubPages/MentalAndBehavioral'));
const NutritionistAndDieticians = React.lazy(() => import('./components/BlogPages/BlogSubPages/NutritionistAndDieticians'));
const OB = React.lazy(() => import('./components/BlogPages/BlogSubPages/OB'));
const OccupationalTharepy = React.lazy(() => import('./components/BlogPages/BlogSubPages/OccupationalTharepy'));
const OnCologist = React.lazy(() => import('./components/BlogPages/BlogSubPages/OnCologist'));
const Optometrists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Optometrists'));
const Orthodontists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Orthodontists'));
const Othopedic = React.lazy(() => import('./components/BlogPages/BlogSubPages/Othopedic'));
const OutPatient = React.lazy(() => import('./components/BlogPages/BlogSubPages/OutPatient'));
const PersonalProtective = React.lazy(() => import('./components/BlogPages/BlogSubPages/PersonalProtective'));
const Pharmaceutical = React.lazy(() => import('./components/BlogPages/BlogSubPages/Pharmaceutical'));
const PhysicalTharepy = React.lazy(() => import('./components/BlogPages/BlogSubPages/PhysicalTharepy'));
const Physicians = React.lazy(() => import('./components/BlogPages/BlogSubPages/Physicians'));
const PlasticSergery = React.lazy(() => import('./components/BlogPages/BlogSubPages/PlasticSergery'));
const Padiatry = React.lazy(() => import('./components/BlogPages/BlogSubPages/Padiatry'));
const Psychiatrists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Psychiatrists'));
const SpeechTharepists = React.lazy(() => import('./components/BlogPages/BlogSubPages/SpeechTharepists'));
const Urologists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Urologists'));
const Counselor = React.lazy(() => import('./components/BlogPages/BlogSubPages/Counselor'));
const NursingHomes = React.lazy(() => import('./components/BlogPages/BlogSubPages/NursingHomes'));
const DoctorsOnDemand = React.lazy(() => import('./components/BlogPages/BlogSubPages/DoctorsOnDemand'));
const Dance = React.lazy(() => import('./components/BlogPages/BlogSubPages/Dance'));
const ExcesiseEquipmentCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/ExcesiseEquipmentCompanies'));
const PersonalTrainer = React.lazy(() => import('./components/BlogPages/BlogSubPages/PersonalTrainer'));
const YogaStudios = React.lazy(() => import('./components/BlogPages/BlogSubPages/YogaStudios'));
const MedicalSPA = React.lazy(() => import('./components/BlogPages/BlogSubPages/MedicalSPA'));
const FitnessCenter = React.lazy(() => import('./components/BlogPages/BlogSubPages/FitnessCenter'));
const MartialArtSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/MartialArtSchools'));
const BalletsSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/BalletsSchools'));
const GymnasticsSchool = React.lazy(() => import('./components/BlogPages/BlogSubPages/GymnasticsSchool'));
const SwimmingSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/SwimmingSchools'));
const Nutritinists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Nutritinists'));
const PilatesStudios = React.lazy(() => import('./components/BlogPages/BlogSubPages/PilatesStudios'));
const Acupuncturists = React.lazy(() => import('./components/BlogPages/BlogSubPages/Acupuncturists'));
const Architecture = React.lazy(() => import('./components/BlogPages/BlogSubPages/Architecture'));
const Consultants = React.lazy(() => import('./components/BlogPages/BlogSubPages/Consultants'));
const Engineering = React.lazy(() => import('./components/BlogPages/BlogSubPages/Engineering'));
const MergersAndAcquisitions = React.lazy(() => import('./components/BlogPages/BlogSubPages/MergersAndAcquisitions'));
const Patroll = React.lazy(() => import('./components/BlogPages/BlogSubPages/Patroll'));
const Publishing = React.lazy(() => import('./components/BlogPages/BlogSubPages/Publishing'));
const Recuiters = React.lazy(() => import('./components/BlogPages/BlogSubPages/Recuiters'));
const Translation = React.lazy(() => import('./components/BlogPages/BlogSubPages/Translation'));
const Appartment = React.lazy(() => import('./components/BlogPages/BlogSubPages/Appartment'));
const PropertyManegement = React.lazy(() => import('./components/BlogPages/BlogSubPages/PropertyManegement'));
const Realtors = React.lazy(() => import('./components/BlogPages/BlogSubPages/Realtors'));
const HomeStaginingServices = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeStaginingServices'));
const RealEstateAppreaisers = React.lazy(() => import('./components/BlogPages/BlogSubPages/RealEstateAppreaisers'));
const RealEstatePhotograph = React.lazy(() => import('./components/BlogPages/BlogSubPages/RealEstatePhotograph'));
const ConstructionCompany = React.lazy(() => import('./components/BlogPages/BlogSubPages/ConstructionCompany'));
const RealEstateInvestement = React.lazy(() => import('./components/BlogPages/BlogSubPages/RealEstateInvestement'));
const CommercialRealEstate = React.lazy(() => import('./components/BlogPages/BlogSubPages/CommercialRealEstate'));
const Boat = React.lazy(() => import('./components/BlogPages/BlogSubPages/Boat'));
const Campgrounds = React.lazy(() => import('./components/BlogPages/BlogSubPages/Campgrounds'));
const GolfCourse = React.lazy(() => import('./components/BlogPages/BlogSubPages/GolfCourse'));
const OutDoors = React.lazy(() => import('./components/BlogPages/BlogSubPages/OutDoors'));
const Radio = React.lazy(() => import('./components/BlogPages/BlogSubPages/Radio'));
const Recration = React.lazy(() => import('./components/BlogPages/BlogSubPages/Recration'));
const RVDealer = React.lazy(() => import('./components/BlogPages/BlogSubPages/RVDealer'));
const SwimmingPoolCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/SwimmingPoolCompanies'));
const Departement = React.lazy(() => import('./components/BlogPages/BlogSubPages/Departement'));
const ToysAndGames = React.lazy(() => import('./components/BlogPages/BlogSubPages/ToysAndGames'));
const Ecommerce = React.lazy(() => import('./components/BlogPages/BlogSubPages/Ecommerce'));
const HomeDecore = React.lazy(() => import('./components/BlogPages/BlogSubPages/HomeDecore'));
const Jewelry = React.lazy(() => import('./components/BlogPages/BlogSubPages/Jewelry'));
const Luxury = React.lazy(() => import('./components/BlogPages/BlogSubPages/Luxury'));
const PetSupplies = React.lazy(() => import('./components/BlogPages/BlogSubPages/PetSupplies'));
const OnlineMarketPlace = React.lazy(() => import('./components/BlogPages/BlogSubPages/OnlineMarketPlace'));
const ClothingAndApparel = React.lazy(() => import('./components/BlogPages/BlogSubPages/ClothingAndApparel'));
const BeautyAndSkinCare = React.lazy(() => import('./components/BlogPages/BlogSubPages/BeautyAndSkinCare'));
const HeathAndWellness = React.lazy(() => import('./components/BlogPages/BlogSubPages/HeathAndWellness'));
const ElectronicStore = React.lazy(() => import('./components/BlogPages/BlogSubPages/ElectronicStore'));
const SportsAndOutdoor = React.lazy(() => import('./components/BlogPages/BlogSubPages/SportsAndOutdoor'));
const Cloud = React.lazy(() => import('./components/BlogPages/BlogSubPages/Cloud'));
const Software = React.lazy(() => import('./components/BlogPages/BlogSubPages/Software'));
const TechCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/TechCompanies'));
const TeleCommunication = React.lazy(() => import('./components/BlogPages/BlogSubPages/TeleCommunication'));
const Robotics = React.lazy(() => import('./components/BlogPages/BlogSubPages/Robotics'));
const ComputerRepair = React.lazy(() => import('./components/BlogPages/BlogSubPages/ComputerRepair'));
const CyberSecurity = React.lazy(() => import('./components/BlogPages/BlogSubPages/CyberSecurity'));
const ArtificialIntelligence = React.lazy(() => import('./components/BlogPages/BlogSubPages/ArtificialIntelligence'));
const DataAnalytics = React.lazy(() => import('./components/BlogPages/BlogSubPages/DataAnalytics'));
const VideoGameCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/VideoGameCompanies'));
const MobileAppDeveloper = React.lazy(() => import('./components/BlogPages/BlogSubPages/MobileAppDeveloper'));
const DigitalMarketing = React.lazy(() => import('./components/BlogPages/BlogSubPages/DigitalMarketing'));
const CloudStorage = React.lazy(() => import('./components/BlogPages/BlogSubPages/CloudStorage'));
const ItConsultingFirms = React.lazy(() => import('./components/BlogPages/BlogSubPages/ItConsultingFirms'));
const HotelAndResort = React.lazy(() => import('./components/BlogPages/BlogSubPages/HotelAndResort'));
const VacationRentals = React.lazy(() => import('./components/BlogPages/BlogSubPages/VacationRentals'));
const Musemums = React.lazy(() => import('./components/BlogPages/BlogSubPages/Musemums'));
const TourOperator = React.lazy(() => import('./components/BlogPages/BlogSubPages/TourOperator'));
const TravelAgencies = React.lazy(() => import('./components/BlogPages/BlogSubPages/TravelAgencies'));
const ResturentAgencies = React.lazy(() => import('./components/BlogPages/BlogSubPages/ResturentAgencies'));
const AmusementPark = React.lazy(() => import('./components/BlogPages/BlogSubPages/AmusementPark'));
const MusemsAndArtGallerie = React.lazy(() => import('./components/BlogPages/BlogSubPages/MusemsAndArtGallerie'));
const Adventure = React.lazy(() => import('./components/BlogPages/BlogSubPages/Adventure'));
const Casinos = React.lazy(() => import('./components/BlogPages/BlogSubPages/Casinos'));
const CountryClubs = React.lazy(() => import('./components/BlogPages/BlogSubPages/CountryClubs'));
const LimoCompanies = React.lazy(() => import('./components/BlogPages/BlogSubPages/LimoCompanies'));
const AirCraft = React.lazy(() => import('./components/BlogPages/BlogSubPages/AirCraft'));
const CounterTop = React.lazy(() => import('./components/BlogPages/BlogSubPages/CounterTop'));
const FoodAndBeverages = React.lazy(() => import('./components/BlogPages/BlogSubPages/FoodAndBeverages'));
const SolarPanel = React.lazy(() => import('./components/BlogPages/BlogSubPages/SolarPanel'));
const PharmaceuticalManufacturing = React.lazy(() => import('./components/BlogPages/BlogSubPages/PharmaceuticalManufacturing'));
const Vintage = React.lazy(() => import('./components/BlogPages/BlogSubPages/Vintage'));
const SecondHand = React.lazy(() => import('./components/BlogPages/BlogSubPages/SecondHand'));
const Consignment = React.lazy(() => import('./components/BlogPages/BlogSubPages/Consignment'));
const Alteration = React.lazy(() => import('./components/BlogPages/BlogSubPages/Alteration'));
const Clothing = React.lazy(() => import('./components/BlogPages/BlogSubPages/Clothing'));
const SheoStore = React.lazy(() => import('./components/BlogPages/BlogSubPages/SheoStore'));
const BeautyStores = React.lazy(() => import('./components/BlogPages/BlogSubPages/BeautyStores'));
const JewelryStores = React.lazy(() => import('./components/BlogPages/BlogSubPages/JewelryStores'));
const OrganicFoodStores = React.lazy(() => import('./components/BlogPages/BlogSubPages/OrganicFoodStores'));
const SmallBussinesSEO = React.lazy(() => import('./components/ServiceDetailspages/SmallBussinesSEO'));
const LocalSEO = React.lazy(() => import('./components/ServiceDetailspages/LocalSEO'));
const NationwideSEO = React.lazy(() => import('./components/ServiceDetailspages/NationwideSEO'));
const InternationSEO = React.lazy(() => import('./components/ServiceDetailspages/InternationSEO'));
const YouTubeSEO = React.lazy(() => import('./components/ServiceDetailspages/YouTubeSEO'));
const MobileSEO = React.lazy(() => import('./components/ServiceDetailspages/MobileSEO'));
const ConsultancySEO = React.lazy(() => import('./components/ServiceDetailspages/ConsultancySEO'));
const ShopifySEO = React.lazy(() => import('./components/ServiceDetailspages/ShopifySEO'));
const WordpressSEO = React.lazy(() => import('./components/ServiceDetailspages/WordpressSEO'));
const OnPageSEO = React.lazy(() => import('./components/ServiceDetailspages/OnPageSEO'));
const TechnicalSEO = React.lazy(() => import('./components/ServiceDetailspages/TechnicalSEO'));
const KeywordSEO = React.lazy(() => import('./components/ServiceDetailspages/KeywordSEO'));
const Backlink = React.lazy(() => import('./components/ServiceDetailspages/Backlink'));
const LinkBuilding = React.lazy(() => import('./components/ServiceDetailspages/LinkBuilding'));
const AuditSEO = React.lazy(() => import('./components/ServiceDetailspages/AuditSEO'));
const GoogleAnalytics = React.lazy(() => import('./components/ServiceDetailspages/GoogleAnalytics'));
const GA4Analytics = React.lazy(() => import('./components/ServiceDetailspages/GA4Analytics'));
const FranchiseSEO = React.lazy(() => import('./components/ServiceDetailspages/FranchiseSEO'));
const GoogleAdMarketing = React.lazy(() => import('./components/ServiceDetailspages/GoogleAdMarketing'));
const PPCMAnagementService = React.lazy(() => import('./components/ServiceDetailspages/PPCMAnagementService'));
const FacebookAdvertising = React.lazy(() => import('./components/ServiceDetailspages/FacebookAdvertising'));
const InstagramAdvertising = React.lazy(() => import('./components/ServiceDetailspages/InstagramAdvertising'));
const YouTubeAdvertising = React.lazy(() => import('./components/ServiceDetailspages/YouTubeAdvertising'));
const TwitterAdvertising = React.lazy(() => import('./components/ServiceDetailspages/TwitterAdvertising'));
const LinkedInMarketing = React.lazy(() => import('./components/ServiceDetailspages/LinkedInMarketing'));
const PinterestMarketing = React.lazy(() => import('./components/ServiceDetailspages/PinterestMarketing'));
const QuaraMarketing = React.lazy(() => import('./components/ServiceDetailspages/QuaraMarketing'));
const WhatsappMarketing = React.lazy(() => import('./components/ServiceDetailspages/WhatsappMarketing'));
const SEOContentWritting = React.lazy(() => import('./components/ServiceDetailspages/SEOContentWritting'));
const ProductDescription = React.lazy(() => import('./components/ServiceDetailspages/ProductDescription'));
const GuestBlogging = React.lazy(() => import('./components/ServiceDetailspages/GuestBlogging'));
const WebCopyingWritting = React.lazy(() => import('./components/ServiceDetailspages/WebCopyingWritting'));
const BlogWritting = React.lazy(() => import('./components/ServiceDetailspages/BlogWritting'));
const B2BWebDesign = React.lazy(() => import('./components/ServiceDetailspages/B2BWebDesign'));
const B2CWebDesign = React.lazy(() => import('./components/ServiceDetailspages/B2CWebDesign'));
const EcommerWebDesign = React.lazy(() => import('./components/ServiceDetailspages/EcommerWebDesign'));
const WordpressWebDesign = React.lazy(() => import('./components/ServiceDetailspages/WordpressWebDesign'));
const ShopifyWebDesign = React.lazy(() => import('./components/ServiceDetailspages/ShopifyWebDesign'));
const ResponsiveWebDesign = React.lazy(() => import('./components/ServiceDetailspages/ResponsiveWebDesign'));
const LandingPagesDesign = React.lazy(() => import('./components/ServiceDetailspages/LandingPagesDesign'));
const CustomLogoDesign = React.lazy(() => import('./components/ServiceDetailspages/CustomLogoDesign'));
const WebsiteMaintance = React.lazy(() => import('./components/ServiceDetailspages/WebsiteMaintance'));
const WebsiteHosting = React.lazy(() => import('./components/ServiceDetailspages/WebsiteHosting'));
const WebsiteoptimizationService = React.lazy(() => import('./components/ServiceDetailspages/WebsiteoptimizationService'));
const WebsiteRedesign = React.lazy(() => import('./components/ServiceDetailspages/WebsiteRedesign'));
const CelebritySEO = React.lazy(() => import('./components/ServiceDetailspages/CelebritySEO'));
const LuxarySEO = React.lazy(() => import('./components/ServiceDetailspages/LuxarySEO'));
const CreativeDesign = React.lazy(() => import('./components/ServiceDetailspages/CreativeDesign'));
const SEOService = React.lazy(() => import('./components/Servicepages/SEOService'));
//const Navbar = React.lazy(() => import('./components/LandingPages/Navbar'));
const PPCService = React.lazy(() => import('./components/Servicepages/PPCService'));
const GovernmentAgencies = React.lazy(() => import('./components/BlogPages/GovernmentAgencies'));
const TourismAgency = React.lazy(() => import('./components/BlogPages/BlogSubPages/TourismAgency'));
const CulturalAgency = React.lazy(() => import('./components/BlogPages/BlogSubPages/CulturalAgency'));
const EconomicDevelopment = React.lazy(() => import('./components/BlogPages/BlogSubPages/EconomicDevelopment'));
const PublicHealth = React.lazy(() => import('./components/BlogPages/BlogSubPages/PublicHealth'));
const EnvironmentAgency = React.lazy(() => import('./components/BlogPages/BlogSubPages/EnvironmentAgency'));
const GovernmentEducation = React.lazy(() => import('./components/BlogPages/BlogSubPages/GovernmentEducation'));
const PublicSafety = React.lazy(() => import('./components/BlogPages/BlogSubPages/PublicSafety'));
const SocialService = React.lazy(() => import('./components/BlogPages/BlogSubPages/SocialService'));
const EmploymentService = React.lazy(() => import('./components/BlogPages/BlogSubPages/EmploymentService'));
const Automotive = React.lazy(() => import('./components/BlogPages/Automotive'));
const AutomotiveDealership = React.lazy(() => import('./components/BlogPages/BlogSubPages/AutomotiveDealership'));
const CookingSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/CookingSchools'));
const Chiropractors = React.lazy(() => import('./components/BlogPages/BlogSubPages/Chiropractors'));
const ArtsSchools = React.lazy(() => import('./components/BlogPages/BlogSubPages/ArtsSchools'));
const MiningEquipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/MiningEquipment'));
const AgricuturalEquipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/AgricuturalEquipment'));
const IndustrialMachinery = React.lazy(() => import('./components/BlogPages/BlogSubPages/IndustrialMachinery'));
const MaterialHandingEquipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/MaterialHandingEquipment'));
const PowerGenerationEquipment = React.lazy(() => import('./components/BlogPages/BlogSubPages/PowerGenerationEquipment'));
const HeavyTruckAndTrailerSales = React.lazy(() => import('./components/BlogPages/BlogSubPages/HeavyTruckAndTrailerSales'));
const TikTokAdvertising = React.lazy(() => import('./components/ServiceDetailspages/TikTokAdvertising'));
const ContentMarketingServices = React.lazy(() => import('./components/Servicepages/ContentMarketingServices'));
const EcommerceSEO = React.lazy(() => import('./components/ServiceDetailspages/EcommerceSEO'));
const Navbar1 = React.lazy(() => import('./components/LandingPages/Navbar1'));
const BackToTop = React.lazy(() => import('./components/LandingPages/BackToTop'));
const BrandingAgency = React.lazy(() => import('./components/HomepageBlog/BrandingAgency'));
const AdvertisingAgency = React.lazy(() => import('./components/HomepageBlog/AdvertisingAgency'));
const HomeTwo = React.lazy(()=>import('./components/LandingPages/HomeTwo'))

function App() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setPopup(true);
        document.body.style.overflow='hidden';
      }, "15000");
    })
  }, [])

  const cancelbtn = () => {
    setPopup(false);
    document.body.style.overflowY='initial';
  }
  return (
    <>
    <div className='App' >
      <BrowserRouter >
        <Suspense fallback={<h2><Loader /></h2>}>
          <Navbar1 />
          {popup && <PopUps onClick={() => { cancelbtn() }} />}
          <Routes>
            {/* Landing Pages */}
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<HomeTwo />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/servicedetails' element={<ServiceDetails />} />  */}
            <Route path='/portfolio' element={<Porfolio />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyandPolicy />} />
            <Route path='/terms-condition' element={<TermsandCondition />} />
            {/* Blog page */}
            <Route path='/industries' element={<Blog />} />
            {/* services */}
            <Route path='/services' element={<ServiceMainPage />} />
            {/* Industry Section  */}
            <Route path='/industries/fashion' element={<Fashion />} />
            <Route path='/industries/automotive' element={<Automotive />} />
            <Route path='/industries/education' element={<Education />} />
            <Route path='/industries/finance' element={<Finance />} />
            <Route path='/industries/food-beverage' element={<FoodAndBeverage />} />//new change
            <Route path='/industries/franchises' element={<Franchises />} />
            <Route path='/industries/heavy-equipment' element={<HeavyEquipment />} />
            <Route path='/industries/logistics' element={<LogisticsAndTransportation />} />
            <Route path='/industries/industrial' element={<Industrial />} />
            <Route path='/industries/home-repair' element={<HomeandRepire />} />
            <Route path='/industries/legal' element={<Legal />} />
            <Route path='/industries/local-consumer' element={<LocalConsumer />} />
            <Route path='/industries/medical-health' element={<MedicalandHealth />} />
            <Route path='/industries/fitness' element={<Fitness />} />
            <Route path='/industries/professional-services' element={<ProfessionalServices />} />
            <Route path='/industries/real-estate' element={<RealEstate />} />
            <Route path='/industries/recreation' element={<Recreation />} />
            <Route path='/industries/retail-ecommerce' element={<Retail />} />
            <Route path='/industries/technology' element={<Tech />} />
            <Route path='/industries/insurance' element={<Insurance />} />
            <Route path='/industries/tourism-hospitality' element={<TourismAndHospitality />} />
            <Route path='/industries/manufacturing' element={<Manufacturing />} />
            <Route path='/industries/government-agency' element={<GovernmentAgencies />} />
            {/* Fashion */}
            <Route path='/industries/fashion/vintage-stores/seo' element={<Vintage />} />
            <Route path='/industries/fashion/secondhand-stores/seo' element={<SecondHand />} />
            <Route path='/industries/fashion/consignment-shops' element={<Consignment />} />
            <Route path='/industries/fashion/alteration-services/seo' element={<Alteration />} />
            <Route path='/industries/fashion/clothing-rental/seo' element={<Clothing />} />
            <Route path='/industries/fashion/shoe-stores/seo' element={<SheoStore />} />
            <Route path='/industries/fashion/beauty-salons/seo' element={<BeautyStores />} />
            <Route path='/industries/fashion/jewellry-stores/seo' element={< Jewelry />} />  
            {/* Autom Motive Section changes happen */}
            <Route path='/industries/automotive/auto-manufacturing' element={<AutoManufacturing />} />
            <Route path='/industries/automotive/auto-repair-services/seo' element={<AutoRepairs />} />
            <Route path='/industries/automotive/auto-parts-retailers/seo' element={<Autoservice />} />
            <Route path='/industries/automotive/motorcycle-dealers/seo' element={<Motorcycle />} />
            <Route path='/industries/automotive/truck-companies/seo' element={<TruckandTrailer />} />
            <Route path='/industries/automotive/automotive-dealers/seo' element={<AutomotiveDealership />} />
            <Route path='/industries/automotive/car-dealers/seo' element={<CarDealer />} />
            {/* Education Section changes happen */}
            <Route path='/industries/education/colleges-universities/seo' element={<Collages />} />
            <Route path='/industries/education/language-schools/seo' element={<HigherEducation />} />
            <Route path='/industries/education/day-care/seo' element={<DayCares />} />//new change
            <Route path='/industries/education/tutoring/seo' element={<TechnicalSchools />} />
            <Route path='/industries/education/cooking-schools/seo' element={<CookingSchools />} />
            <Route path='/industries/education/arts-schools/seo' element={<ArtsSchools />} />
            <Route path='/industries/education/online-education/seo' element={<OnlineEducation />} />
            {/* Finance Section changes happen */}
            <Route path='/industries/finance/accountants/seo' element={<Accounting />} />//new change
            <Route path='/industries/finance/banks' element={<Banks />} />
            <Route path='/industries/finance/cpa-firms/seo' element={<CPAFirms />} />
            <Route path='/industries/finance/credit-services/seo' element={<CreditServices />} />
            <Route path='/industries/finance/credit-unions/seo' element={<CreditUnions />} />
            <Route path='/industries/finance/loan-officer/seo' element={<LoanOfficer />} />
            <Route path='/industries/finance/wealth-management/seo' element={<WealthManagement />} />
            <Route path='/industries/finance/financial-advisors/seo' element={<FinancialAdvisors />} />
            {/* Food & Braveges changes happen */}
            <Route path='/industries/food-beverage/bakeries/seo' element={<Bakeries />} />
            <Route path='/industries/food-beverage/wineries' element={<Breweries />} />
            <Route path='/industries/food-beverage/cafes/seo' element={<Cafes />} />
            <Route path='/industries/food-beverage/food-products/seo' element={<FoodProducts />} />
            <Route path='/industries/food-beverage/speciality-food-stores/seo' element={<Speciality />} />
            <Route path='/industries/food-beverage/bars/seo' element={<Bars />} />
            <Route path='/industries/food-beverage/restaurants/seo' element={<Resturents />} />//new change
            <Route path='/industries/food-beverage/online-food-delivery/seo' element={<OnlineFood />} />
            <Route path='/industries/food-beverage/industrial' element={<Industrial />} />
            <Route path='/industries/food-beverage/organic-food-stores/seo' element={<OrganicFoodStores />} />
            {/* Franchises */}
            <Route path='/industries/franchises/child-entertainment-and-recreation-franchise' element={<SearchEngine />} />//new change
            <Route path='/industries/franchises/fitness-franchise' element={<WebDesign />} />
            <Route path='/industries/franchises/social-media' element={<SocialMedia />} />
            <Route path='/industries/franchises/restaurant-franchise/seo' element={<Resturentfrenchise />} />//new change
            <Route path='/industries/franchises/retail-franchise/seo' element={<RetailFranchise />} />
            <Route path='/industries/franchises/automotive-franchise/seo' element={<AutoMotiveFranchise />} />
            <Route path='/industries/franchises/health-wellness-franchise/seo' element={<HealthWellness />} />
            <Route path='/industries/franchises/education-franchise/seo' element={<EducationFranchise />} />
            <Route path='/industries/franchises/cleaning-franchise/seo' element={<Cleaning />} />
            <Route path='/industries/franchises/home-improvement-franchise/seo' element={<HomeFranchise />} />
            <Route path='/industries/franchises/hospitality-franchise/seo' element={<TrevelFranchise />} />
            <Route path='/industries/franchises/senior-care-franchise/seo' element={<SeniorFranchise />} />
            {/* Heavy Equipment changes happen */}
            <Route path='/industries/heavy-equipment/forklift-dealers/seo' element={<Forlift />} />
            <Route path='/industries/heavy-equipment/construction-equipment-companies/seo' element={<Excavation />} />
            <Route path='/industries/heavy-equipment/paving-companies/seo' element={<Paving />} />
            <Route path='/industries/heavy-equipment/equipment-rental-companies/seo' element={<Equipment />} />
            <Route path='/industries/heavy-equipment/mining-equipment-companies/seo' element={<MiningEquipment />} />
            <Route path='/industries/heavy-equipment/agricultural-equipment-companies/seo' element={<AgricuturalEquipment />} />
            <Route path='/industries/heavy-equipment/industrial-machinery/seo' element={<IndustrialMachinery />} />
            <Route path='/industries/heavy-equipment/material-handling-equipment/seo' element={<MaterialHandingEquipment />} />
            <Route path='/industries/heavy-equipment/power-generation-equipment/seo' element={<PowerGenerationEquipment />} />
            <Route path='/industries/heavy-equipment/heavy-truck-trailer/seo' element={<HeavyTruckAndTrailerSales />} />
            {/* Logistics and Transportation */}
            <Route path='/industries/logistics/taxi-rental-companies/seo' element={<CarandTexiServices />} />//new chNGE
            <Route path='/industries/logistics/freight' element={<Freight />} />
            <Route path='/industries/logistics/trucking-companies/seo' element={<Trucking />} />
            <Route path='/industries/logistics/air-cargo' element={<AirCargo />} />
            <Route path='/industries/logistics/shipping' element={<Shipping />} />
            <Route path='/industries/logistics/courier-services/seo' element={<Courier />} />
            <Route path='/industries/logistics/warehousing' element={<WareHousing />} />
            <Route path='/industries/logistics/customs' element={<Customs />} />
            <Route path='/industries/logistics/logistics-consulting-firm' element={<Equipment />} />
            {/* Industrial changes happen */}
            <Route path='/industries/industrial/solar-energy' element={<Solar />} />
            <Route path='/industries/industrial/renewable-energy' element={<Renewable />} />
            <Route path='/industries/industrial/refrigeration' element={<Refrigeration />} />
            <Route path='/industries/industrial/lumber-companies/seo' element={<Limber />} />//new change
            <Route path='/industries/industrial/mining-companies' element={<Mining />} />
            <Route path='/industries/industrial/oil-gas-companies' element={<OilandGas />} />
            <Route path='/industries/industrial/plating' element={<Planting />} />
            <Route path='/industries/industrial/well-drilling-companies' element={<WellDriling />} />//new change
            <Route path='/industries/industrial/cabinet-manufacturing-companies/seo' element={<Cabinet />} />
            <Route path='/industries/industrial/industrial-equipment-manufacturers' element={<IndusrtialEquipment />} />//new change
            <Route path='/industries/industrial/machinery-manufacturers' element={<Machinery />} />//new change
            <Route path='/industries/industrial/industrial-automation-companies' element={<IndustrialAutomation />} />
            <Route path='/industries/industrial/industrial-supplies' element={<IndustrialSupplies />} />
            <Route path='/industries/industrial-companies' element={<MaintanceRepair />} />
            <Route path='/industries/industrial/safety-products-manufacturers' element={<SafetyProduct />} />//new vhange
            <Route path='/industries/industrial/waste-management-companies' element={<WasteProduct />} />
            <Route path='/industries/industrial/environmental-engineering' element={<EngineeringServices />} />
            <Route path='/industries/industrial/cleaning-services' element={<CleaningServices />} />
            <Route path='/industries/industrial/sustainable-agriculture' element={<TraningEducation />} />
            {/* Home And Repair changes happen */}
            <Route path='/industries/home-repair/home-improvement' element={<HomeImprovement />} />
            <Route path='/industries/home-repair/home-energy' element={<HomeEnergy />} />
            <Route path='/industries/home-repair/home-builder/seo' element={<HomeBuilder />} />
            <Route path='/industries/home-repair/home-security' element={<HomeSecurity />} />
            <Route path='/industries/home-repair/chimney-masonry' element={<ChimneyAndMasonry />} />
            <Route path='/industries/home-repair/bathroom-remodel' element={<BathroomRemodel />} />
            <Route path='/industries/home-repair/tree-care' element={<TreeCare />} />
            <Route path='/industries/home-repair/landscaping-companies' element={<LandScaping />} />
            <Route path='/industries/home-repair/moving-companies' element={<MovingCompanies />} />
            <Route path='/industries/home-repair/pest-control' element={<PestControl />} />
            <Route path='/industries/home-repair/deck-builders' element={<DeckBuilder />} />
            <Route path='/industries/home-repair/electricians' element={<Electrician />} />
            <Route path='/industries/home-repair/flooring' element={<Flooring />} />
            <Route path='/industries/home-repair/garage-doors' element={<GarageDoors />} />
            <Route path='/industries/home-repair/plumbers' element={<Plumber />} />
            <Route path='/industries/home-repair/roofing' element={<Roofing />} />
            <Route path='/industries/home-repair/restoration-companies' element={<Restoration />} />
            <Route path='/industries/home-repair/hvac' element={<HVAC />} />
            <Route path='/industries/home-repair/garage-door-repair' element={<GarageDoorRepair />} />
            <Route path='/industries/home-repair/carpet-cleaners' element={<CellPhoneRepair />} />
            <Route path='/industries/home-repair/computer-retail-shop' element={<ComputerRetail />} />
            <Route path='/industries/home-repair/moving-services' element={<MovingServices />} />
            <Route path='/industries/home-repair/locksmiths' element={<LockSmith />} />
            <Route path='/industries/home-repair/fence-installer' element={<FenceInstaller />} />
            <Route path='/industries/home-repair/food-delivery-services' element={<FoodDeliveryServices />} />
            <Route path='/industries/home-repair/grocery-delivery-services' element={<GroceryDeliveryServices />} />
            <Route path='/industries/home-repair/window-door-companies' element={<WindowAndDoor />} />
            <Route path='/industries/home-repair/interior-design-services' element={<InteriorDesignServices />} />
            <Route path='/industries/home-repair/handyman-services' element={<HandyManServices />} />
            {/* Insurance changes happen */}
            <Route path='/industries/insurance/financial-insurance/seo' element={<Financial />} />//new change
            <Route path='/industries/insurance/health-insurance/seo' element={<Health />} />
            <Route path='/industries/insurance/business-insurance/seo' element={<Business />} />
            <Route path='/industries/insurance/automobile-insurance/seo' element={<AutoInsurance />} />//new change
            <Route path='/industries/insurance/travel-insurance/seo' element={<TravelInsurance />} />
            <Route path='/industries/insurance/home-insurance/seo' element={<HomeInsurance />} />
            <Route path='/industries/insurance/disability-insurance/seo' element={<DisabilityInsurance />} />
            {/* Legal changes happen */}
            <Route path='/industries/legal/personal-injury-lawyers/seo' element={<PersonalInjuryLawyers />} />
            <Route path='/industries/legal/criminal-defense-lawyers/seo' element={<Criminal />} />
            <Route path='/industries/legal/family-lawyers/seo' element={<FamiliyLaw />} />//new change
            <Route path='/industries/legal/bankruptcy-lawyers/seo' element={<Bankruptcy />} />
            <Route path='/industries/legal/immigration-lawyers/seo' element={<Immigration />} />
            <Route path='/industries/legal/estate-planning-lawyers/seo' element={<EstatePlanning />} />
            {/* Local Consumer change happen */}
            <Route path='/industries/local-consumer/assisted-senior-living' element={<Assisted />} />
            <Route path='/industries/local-consumer/auctioneers/seo' element={<Auctioneers />} />
            <Route path='/industries/local-consumer/catering/seo' element={<Catering />} />
            <Route path='/industries/local-consumer/event-planner' element={<EventPlanner />} />
            <Route path='/industries/local-consumer/florist/seo' element={<Florist />} />
            <Route path='/industries/local-consumer/funeral-homes/seo' element={<Funeral />} />
            <Route path='/industries/local-consumer/veterinarians/seo' element={<Vaterinarians />} />
            <Route path='/industries/local-consumer/janitors/seo' element={<Janitors />} />
            <Route path='/industries/local-consumer/driving-school' element={<RVDealer />} />
            <Route path='/industries/local-consumer/private-investigators/seo' element={<PrivateInvestigator />} />
            <Route path='/industries/local-consumer/storage-facilities/seo' element={<StorageFacilities />} />
            {/* Medical Health */}
            <Route path='/industries/medical-health/alternative-medicine' element={<AlternativeMedicine />} />
            <Route path='/industries/medical-health/audiology' element={<Audioligy />} />
            <Route path='/industries/medical-health/bio-technology' element={<BioTechnology />} />
            <Route path='/industries/medical-health/cardiology' element={<Cardiology />} />
            <Route path='/industries/medical-health/fertility-clinics' element={<Fertility />} />
            <Route path='/industries/medical-health/dentists' element={<Dentists />} />
            <Route path='/industries/medical-health/dermatology' element={<Dermatology />} />
            <Route path='/industries/medical-health/doctors-offices' element={<DoctorsOffices />} />
            <Route path='/industries/medical-health/ear-nose-throat-doctors' element={<EarNoseThroat />} />
            <Route path='/industries/medical-health/ehr-companies' element={<EHRCompanies />} />
            <Route path='/industries/medical-health/chiropractors' element={<Chiropractors />} />
            <Route path='/industries/medical-health/medical-imaging' element={<MedicalImagining />} />
            <Route path='/industries/medical-health/mental-behavioral-health' element={<MentalAndBehavioral />} />//new change
            <Route path='/industries/medical-health/nutritionists-dieticians' element={<NutritionistAndDieticians />} />
            <Route path='/industries/medical-health/ob-gyn' element={<OB />} />
            <Route path='/industries/medical-health/occupational-therapy' element={<OccupationalTharepy />} />
            <Route path='/industries/medical-health/oncologists' element={<OnCologist />} />//new change
            <Route path='/industries/medical-health/optometrists' element={<Optometrists />} />
            <Route path='/industries/medical-health/orthodontists' element={<Orthodontists />} />
            <Route path='/industries/medical-health/orthopedic' element={<Othopedic />} />
            <Route path='/industries/medical-health/rehab-addiction-treatment' element={<OutPatient />} />
            <Route path='/industries/medical-health/personal-protective' element={<PersonalProtective />} />
            <Route path='/industries/medical-health/pharmaceutical-companies' element={<Pharmaceutical />} />
            <Route path='/industries/medical-health/telehealth' element={<PhysicalTharepy />} />
            <Route path='/industries/medical-health/hospice' element={<Physicians />} />
            <Route path='/industries/medical-health/plastic-surgery' element={<PlasticSergery />} />
            <Route path='/industries/medical-health/podiatry' element={<Padiatry />} />
            <Route path='/industries/medical-health/psychiatrists' element={<Psychiatrists />} />
            <Route path='/industries/medical-health/speech-therapists' element={<SpeechTharepists />} />
            <Route path='/industries/medical-health/urologists' element={<Urologists />} />
            <Route path='/industries/medical-health/counselor' element={<Counselor />} />
            <Route path='/industries/medical-health/nursing-homes' element={<NursingHomes />} />
            <Route path='/industries/medical-health/hospitals-healthcare' element={<DoctorsOnDemand />} />
            {/* Fitness */}
            <Route path='/industries/fitness/dance-studios' element={<Dance />} />
            <Route path='/industries/fitness/exercise-equipment-companies' element={<ExcesiseEquipmentCompanies />} />
            <Route path='/industries/fitness/personal-trainer' element={<PersonalTrainer />} />
            <Route path='/industries/fitness/yoga-studios' element={<YogaStudios />} />
            <Route path='/industries/fitness/medical-spa' element={<MedicalSPA />} />
            <Route path='/industries/fitness/fitness-centers' element={<FitnessCenter />} />
            <Route path='/industries/fitness/martial-arts-schools' element={<MartialArtSchools />} />
            <Route path='/industries/fitness/ballet-schools' element={<BalletsSchools />} />
            <Route path='/industries/fitness/gymnastics-schools' element={<GymnasticsSchool />} />
            <Route path='/industries/fitness/swimming-schools' element={<SwimmingSchools />} />
            <Route path='/industries/fitness/nutritionists' element={<Nutritinists />} />
            <Route path='/industries/fitness/pilates-studios' element={<PilatesStudios />} />
            <Route path='/industries/fitness/acupuncturists' element={<Acupuncturists />} />
            {/* Personal Services */}
            <Route path='/industries/professional-services/architectural-firms' element={<Architecture />} />
            <Route path='/industries/professional-services/consultants' element={<Consultants />} />
            <Route path='/industries/professional-services/engineering-firms' element={<Engineering />} />
            <Route path='/industries/professional-services/mergers-acquisitions' element={<MergersAndAcquisitions />} />
            <Route path='/industries/professional-services/payroll-services' element={<Patroll />} />
            <Route path='/industries/professional-services/publishing-companies' element={<Publishing />} />
            <Route path='/industries/professional-services/recruiters' element={<Recuiters />} />
            <Route path='/industries/professional-services/translation-and-interpretations-services' element={<Translation />} />
            {/* Real Estate */}
            <Route path='/industries/real-estate/apartments' element={<Appartment />} />
            <Route path='/industries/real-estate/property-management-services/seo' element={<PropertyManegement />} />//new change
            <Route path='/industries/real-estate/realtors' element={<Realtors />} />
            <Route path='/industries/real-estate/home-staging-services/seo' element={<HomeStaginingServices />} />
            <Route path='/industries/real-estate/real-estate-appraisers/seo' element={<RealEstateAppreaisers />} />//new change
            <Route path='/industries/real-estate/real-estate-photographers/seo' element={<RealEstatePhotograph />} />
            <Route path='/industries/real-estate/construction-companies/seo' element={<ConstructionCompany />} />
            <Route path='/industries/real-estate/real-estate-investement-companies/seo' element={<RealEstateInvestement />} />
            <Route path='/industries/real-estate/commercial-real-estate' element={<CommercialRealEstate />} />
            {/* Recration */}
            <Route path='/industries/recreation/boat-dealers/seo' element={<Boat />} />
            <Route path='/industries/recreation/rv-parks-campgrounds/seo' element={<Campgrounds />} />
            <Route path='/industries/recreation/golf-course-companies/seo' element={<GolfCourse />} />
            <Route path='/industries/recreation/outdoor-products/seo' element={<OutDoors />} />
            <Route path='/industries/recreation/radio-stations/seo' element={<Radio />} />//new change
            <Route path='/industries/recreation/travel-recreation-websites' element={<Recration />} />
            <Route path='/industries/recreation/swimming-pool-companies/seo' element={<SwimmingPoolCompanies />} />
            {/* Retail & Ecommerce */}
            <Route path='/industries/retail-ecommerce/department-stores' element={<Departement />} />
            <Route path='/industries/retail-ecommerce/toys-stores' element={<ToysAndGames />} />
            <Route path='/industries/retail-ecommerce/ecommerce' element={<Ecommerce />} />
            <Route path='/industries/retail-ecommerce/home-decor-stores' element={<HomeDecore />} />
            <Route path='/industries/retail-ecommerce/jewelry' element={<JewelryStores />} />
            <Route path='/industries/retail-ecommerce/luxury-brands' element={<Luxury />} />
            <Route path='/industries/retail-ecommerce/pet-supplies-store' element={<PetSupplies />} />
            <Route path='/industries/retail-ecommerce/online-market-places' element={<OnlineMarketPlace />} />
            <Route path='/industries/retail-ecommerce/apparel-stores' element={<ClothingAndApparel />} />
            <Route path='/industries/retail-ecommerce/beauty-skincare' element={<BeautyAndSkinCare />} />
            <Route path='/industries/retail-ecommerce/health-wellness-stores' element={<HeathAndWellness />} />
            <Route path='/industries/retail-ecommerce/electronics-stores' element={<ElectronicStore />} />
            <Route path='/industries/retail-ecommerce/sports-stores' element={<SportsAndOutdoor />} />
            {/* Tech */}
            <Route path='/industries/technology/cloud-computing' element={<Cloud />} />
            <Route path='/industries/technology/software' element={<Software />} />
            <Route path='/industries/technology/technology-companies' element={<TechCompanies />} />
            <Route path='/industries/technology/tele-communication' element={<TeleCommunication />} />
            <Route path='/industries/technology/robotics' element={<Robotics />} />
            <Route path='/industries/technology/computer-repair' element={<ComputerRepair />} />
            <Route path='/industries/technology/cyber-security' element={<CyberSecurity />} />
            <Route path='/industries/technology/artificial-intelligence' element={<ArtificialIntelligence />} />
            <Route path='/industries/technology/data-analytics' element={<DataAnalytics />} />
            <Route path='/industries/technology/video-game-companies' element={<VideoGameCompanies />} />
            <Route path='/industries/technology/mobile-app-development-company' element={<MobileAppDeveloper />} />
            <Route path='/industries/technology/digital-marketing' element={<DigitalMarketing />} />
            <Route path='/industries/technology/cloud-storage' element={<CloudStorage />} />
            <Route path='/industries/technology/it-consulting-firms' element={<ItConsultingFirms />} />
            {/* Tourism And Hospitality changes happen */}
            <Route path='/industries/tourism-hospitality/hotels-resorts' element={<HotelAndResort />} />
            <Route path='/industries/tourism-hospitality/vacation-rentals' element={<VacationRentals />} />
            <Route path='/industries/tourism-hospitality/museums' element={<Musemums />} />
            <Route path='/industries/tourism-hospitality/tour-operators' element={<TourOperator />} />
            <Route path='/industries/tourism-hospitality/travel-agencies' element={<TravelAgencies />} />
            <Route path='/industries/tourism-hospitality/movie-theaters' element={<ResturentAgencies />} />
            <Route path='/industries/tourism-hospitality/amusement-parks' element={<AmusementPark />} />
            <Route path='/industries/tourism-hospitality/art-galleries' element={<MusemsAndArtGallerie />} />
            <Route path='/industries/tourism-hospitality/adventure' element={<Adventure />} />
            <Route path='/industries/tourism-hospitality/casinos' element={<Casinos />} />
            <Route path='/industries/tourism-hospitality/country-clubs' element={<CountryClubs />} />
            <Route path='/industries/tourism-hospitality/limo-companies' element={<LimoCompanies />} />
            {/* Manufaruring changes happen */}
            <Route path='/industries/manufacturing/aviation/seo' element={<AirCraft />} />
            <Route path='/industries/manufacturing/countertop-manufacturers/seo' element={<CounterTop />} />//new change
            <Route path='/industries/manufacturing/food-beverages-manufacturers/seo' element={<FoodAndBeverages />} />//new change
            <Route path='/industries/manufacturing/solar-panel-manufacturers/seo' element={<SolarPanel />} />//new change
            <Route path='/industries/manufacturing/phamaceutical-manufacturers/seo' element={<PharmaceuticalManufacturing />} />//new change
            {/* Government Agency changes happen */}
            <Route path='/industries/government-agency/tourism/seo' element={<TourismAgency />} />
            <Route path='/industries/government-agency/arts-cultural/seo' element={<CulturalAgency />} />
            <Route path='/industries/government-agency/economic-development/seo' element={<EconomicDevelopment />} />
            <Route path='/industries/nonprofits' element={<PublicHealth />} />//new change
            <Route path='/industries/government-agency/environment/seo' element={<EnvironmentAgency />} />
            <Route path='/industries/government-agency/government-education' element={<GovernmentEducation />} />
            <Route path='/industries/government-agency/public-safety-seo' element={<PublicSafety />} />
            <Route path='/industries/government-agency/social-service' element={<SocialService />} />
            <Route path='/industries/government-agency/employment-service' element={<EmploymentService />} />
            {/* Service Pages */}
            <Route path='/seo-services' element={<SEOService />} />
            <Route path='/ppc-services' element={<PPCService />} />
            <Route path='/content-marketing-services' element={<ContentMarketingServices />} />
            <Route path='/design-development' element={<Service />} />
            {/* Services Sub pages only from Mobile responsive */}
            <Route path='/seo-services-blog' element={<SeoServicesSubpage />} />
            <Route path='/ppc-services-blog' element={<PPCServicesSubpage />} />
            <Route path='/design-development-services-blog' element={<DesignandDevelopmentSubpage />} />
            <Route path='/content-marketing-blog' element={<ContentMarketingSubpage />} />
            {/* Service Details */}
            {/* SEO Services */}
            <Route path='/seo-services/ecommerce-seo' element={<EcommerceSEO />} />
            <Route path='/seo-services/small-business-seo' element={<SmallBussinesSEO />} />
            <Route path='/seo-services/local-seo' element={<LocalSEO />} />
            <Route path='/seo-services/nationwide-seo' element={<NationwideSEO />} />
            <Route path='/seo-services/international-seo' element={<InternationSEO />} />
            <Route path='/seo-services/youtube-seo' element={<YouTubeSEO />} />
            <Route path='/seo-services/mobile-seo' element={<MobileSEO />} />
            <Route path='/seo-services/seo-consultancy' element={<ConsultancySEO />} />
            <Route path='/seo-services/shopify-seo' element={<ShopifySEO />} />
            <Route path='/seo-services/wordpress-seo' element={<WordpressSEO />} />
            <Route path='/seo-services/on-page-seo' element={<OnPageSEO />} />
            <Route path='/seo-services/technical-seo' element={<TechnicalSEO />} />
            <Route path='/seo-services/seo-keywords-research' element={<KeywordSEO />} />
            <Route path='/seo-services/backlink-audit' element={<Backlink />} />
            <Route path='/seo-services/link-building-services' element={<LinkBuilding />} />
            <Route path='/seo-services/seo-audits' element={<AuditSEO />} />
            <Route path='/seo-services/google-analytics-services' element={<GoogleAnalytics />} />
            <Route path='/seo-services/ga4-migration' element={<GA4Analytics />} />
            <Route path='/seo-services/franchise-seo' element={<FranchiseSEO />} />
            <Route path='/seo-services/celebrity-seo' element={<CelebritySEO />} />
            <Route path='/seo-services/luxury-seo' element={<LuxarySEO />} />
            {/* PPC Services */}
            <Route path='/ppc-services/google-ads-marketing' element={<GoogleAdMarketing />} />
            <Route path='/ppc-services/ppc-management-services' element={<PPCMAnagementService />} />
            <Route path='/ppc-services/facebook-advertising' element={<FacebookAdvertising />} />
            <Route path='/ppc-services/instagram-advertising' element={<InstagramAdvertising />} />
            <Route path='/ppc-services/youtube-advertising' element={<YouTubeAdvertising />} />
            <Route path='/ppc-services/twitter-marketing' element={<TwitterAdvertising />} />
            <Route path='/ppc-services/linkedin-marketing' element={<LinkedInMarketing />} />
            <Route path='/ppc-services/pinterest-marketing' element={<PinterestMarketing />} />
            <Route path='/ppc-services/quora-marketing' element={<QuaraMarketing />} />
            <Route path='/ppc-services/whatsapp-marketing' element={<WhatsappMarketing />} />
            <Route path='/ppc-services/tiktok-advertising' element={<TikTokAdvertising />} />
            {/* Website And Design */}
            <Route path='/design-development/b2b-web-design' element={<B2BWebDesign />} />
            <Route path='/design-development/b2c-web-design' element={<B2CWebDesign />} />
            <Route path='/design-development/ecommerce-web-design' element={<EcommerWebDesign />} />
            <Route path='/design-development/wordpress-web-design' element={<WordpressWebDesign />} />
            <Route path='/design-development/shopify-web-design' element={<ShopifyWebDesign />} />
            <Route path='/design-development/responsive-web-design' element={<ResponsiveWebDesign />} />
            <Route path='/design-development/landing-pages-design' element={<LandingPagesDesign />} />
            <Route path='/design-development/custom-logo-design' element={<CustomLogoDesign />} />
            <Route path='/design-development/website-maintenance' element={<WebsiteMaintance />} />
            <Route path='/design-development/website-hosting' element={<WebsiteHosting />} />
            <Route path='/design-development/website-optimization-services' element={<WebsiteoptimizationService />} />
            <Route path='/design-development/website-redesign' element={<WebsiteRedesign />} />
            <Route path='/creative-design' element={<CreativeDesign />} />
            {/* Content Marketing Services */}
            <Route path='/content-marketing-services/seo-content-writing' element={<SEOContentWritting />} />
            <Route path='/content-marketing-services/product-descriptions' element={<ProductDescription />} />
            <Route path='/content-marketing-services/guest-blogging' element={<GuestBlogging />} />
            <Route path='/content-marketing-services/web-copy-writing' element={<WebCopyingWritting />} />
            <Route path='/content-marketing-services/blog-writing' element={<BlogWritting />} />
            {/* Homepage Blog */}
            <Route path='/brandingagency' element={<BrandingAgency />} />
            <Route path='/advertisingagency' element={<AdvertisingAgency />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
          <BackToTop />
          <Whatsappchat />
        </Suspense>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;