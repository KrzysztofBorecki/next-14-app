--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: services_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."services_types" ("id", "created_at", "title", "description") VALUES
	('c319e502-fe8e-4672-999e-32f7091159eb', '2023-12-17 17:42:44.226082+00', 'Diagnostics', '{"Service description - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Asperiores, at aut commodi consequatur cumque cupiditate deleniti eum excepturi magni nam nulla quas unde! Aliquam, consectetur dolore."}'),
	('d769c6c3-c8b2-4782-8f9c-afed8cfc6c19', '2023-12-17 17:43:02.685219+00', 'Consultations', '{"Service description - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Asperiores, at aut commodi consequatur cumque cupiditate deleniti eum excepturi magni nam nulla quas unde! Aliquam, consectetur dolore."}');


--
-- Data for Name: team; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."team" ("id", "created_at", "name", "surname", "avatar", "specialization", "degree", "description", "biography") VALUES
	('040c7705-b028-474c-a533-5b495dc9e434', '2023-12-17 17:56:59.061564+00', 'Alisa', 'Bosii', 'avatar-02-jonathan-borba-unsplash.jpg', 'Immunology', 'MD-PhD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}'),
	('bf8fab8a-8830-41c7-b659-85173cc35165', '2023-12-17 17:57:53.474545+00', 'Astrid', 'Giraud', 'avatar-05-andrey-zvyagintsev-unsplash.jpg', 'Gynecology', 'MD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}'),
	('392968c6-3d20-4be2-851c-dfba6365484c', '2023-12-17 17:58:44.075383+00', 'Marion', 'Salina', 'avatar-09-christina-wocintechchat-com-unsplash.jpg', 'Genetics', 'MD-PhD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}'),
	('395482bf-46cd-41d8-acad-369b01626ad2', '2023-12-17 17:59:47.031041+00', 'Gustav', 'Filipek', 'avatar-10-linkedin-sales-solutions-unsplash.jpg', 'Oncology', 'MD-PhD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}'),
	('0aa9dce8-c539-489d-a6e1-ee2e38d53513', '2023-12-17 18:00:32.703538+00', 'Edward', 'Newgate', 'avatar-01-philip-martin-unsplash.jpg', 'Rheumatology', 'MD-PhD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}'),
	('f4e82a81-df7c-44cd-84c1-9ee2f1ac363d', '2023-12-17 18:01:13.232399+00', 'Anastasia', 'Dumitru', 'avatar-04-michael-dam-unsplash.jpg', 'Genetics', 'PhD', '{"Short description - max 50 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit.","Accusamus amet commodi consequatur cupiditate, dolorem et excepturi harum itaque laboriosam laborum."}', '{"Biography - max 150 words.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi corporis culpa dolor dolore dolores eaque eius enim, esse expedita fugit id nihil perspiciatis praesentium quod repudiandae veniam voluptas.","Ab aliquam aliquid aut consectetur culpa cum dolore dolorum, id inventore iure laboriosam laudantium minima modi nemo, nulla porro quibusdam repellendus sit tenetur voluptate. Ex id iste optio placeat reiciendis!","Alias cum ea enim excepturi laborum nihil, quidem quis quod, sequi suscipit veritatis, voluptas voluptate? Harum, possimus, quam. Accusantium ipsa libero mollitia nesciunt numquam quidem,reprehenderit repudiandae totam unde vero!"}');


--
-- Data for Name: services_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."services_items" ("id", "created_at", "service_type", "title", "description", "material", "employee", "price", "currency") VALUES
	('250dce97-a6cb-459b-9f4b-392720ebe65e', '2023-12-17 18:04:43.558896+00', 'd769c6c3-c8b2-4782-8f9c-afed8cfc6c19', 'General', '15 min consultation', NULL, '392968c6-3d20-4be2-851c-dfba6365484c', 200, 'zł'),
	('8c9cb559-a7e2-4533-a356-d368bfc7a88e', '2023-12-17 18:06:46.342235+00', 'd769c6c3-c8b2-4782-8f9c-afed8cfc6c19', 'Oncology', '30 min consultation', NULL, '395482bf-46cd-41d8-acad-369b01626ad2', 200, 'zł'),
	('08cb93f8-b25e-4cc4-9b1f-19e7c842c413', '2023-12-17 18:08:30.05514+00', 'd769c6c3-c8b2-4782-8f9c-afed8cfc6c19', 'Inflammatory diseases', '20 min consultation', NULL, '040c7705-b028-474c-a533-5b495dc9e434', 200, 'zł'),
	('19d097d3-5ec3-4b59-8c59-60ca4860511d', '2023-12-17 18:10:08.299515+00', 'd769c6c3-c8b2-4782-8f9c-afed8cfc6c19', 'Planned Parenthood', '20 min consultation', NULL, 'bf8fab8a-8830-41c7-b659-85173cc35165', 200, 'zł'),
	('f859abb3-170d-474c-a7b5-449edf2ac793', '2023-12-17 18:11:02.81015+00', 'd769c6c3-c8b2-4782-8f9c-afed8cfc6c19', 'Rheumatology', '20 min consultation', NULL, '0aa9dce8-c539-489d-a6e1-ee2e38d53513', 200, 'zł'),
	('3de0947c-4d0c-4a01-b5f3-e554006e965d', '2023-12-17 18:11:47.792432+00', 'c319e502-fe8e-4672-999e-32f7091159eb', 'BRCA1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto!', 'Venous blood sample', NULL, 400, 'zł'),
	('ec198b90-a25d-46dc-92c6-1b12aeb77c45', '2023-12-17 18:12:27.674354+00', 'c319e502-fe8e-4672-999e-32f7091159eb', 'BRCA2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto!', 'Venous blood sample', NULL, 200, 'zł'),
	('10801779-7118-4e8b-95de-b3f204433590', '2023-12-17 18:13:08.302637+00', 'c319e502-fe8e-4672-999e-32f7091159eb', 'CHEK2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto!', 'Venous blood sample', NULL, 200, 'zł'),
	('3790db60-bdc5-4f28-9aa1-b545faa86aeb', '2023-12-17 18:13:35.886144+00', 'c319e502-fe8e-4672-999e-32f7091159eb', 'CFTR', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto!', 'Venous blood sample', NULL, 300, 'zł'),
	('58db2f8e-0275-4f90-ade3-783c77beffa3', '2023-12-17 18:14:08.886756+00', 'c319e502-fe8e-4672-999e-32f7091159eb', 'NBS1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto!', 'Venous blood sample', NULL, 500, 'zł');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('www', 'www', NULL, '2023-12-17 17:53:53.398128+00', '2023-12-17 17:53:53.398128+00', true, false, 40960, '{image/jpeg,image/png,image/webp}', NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('aee60915-f9ad-49b5-9f2d-127f34e913cb', 'www', 'avatars/avatar-08-jonathan-cosens-photography-unsplash.jpg', NULL, '2023-12-17 17:54:47.310033+00', '2023-12-17 17:54:47.310033+00', '2023-12-17 17:54:47.310033+00', '{"eTag": "\"ac72c6ccd03b17dcb88afbd9d27efaa5\"", "size": 20173, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 20173, "httpStatusCode": 200}', '939b5337-086c-4f08-b556-610198028ede', NULL),
	('0c6db133-518e-42b2-9a9c-5effeb4cc240', 'www', 'avatars/avatar-06-rachel-mcdermott-unsplash.jpg', NULL, '2023-12-17 17:54:47.385942+00', '2023-12-17 17:54:47.385942+00', '2023-12-17 17:54:47.385942+00', '{"eTag": "\"b6b6ad57eb81528ecce1970b88674db1\"", "size": 10114, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 10114, "httpStatusCode": 200}', '7f22fff2-4763-4318-8706-898d26239c88', NULL),
	('ca429f7c-2509-40f7-a235-f113dcd56cb3', 'www', 'avatars/avatar-10-linkedin-sales-solutions-unsplash.jpg', NULL, '2023-12-17 17:54:47.395162+00', '2023-12-17 17:54:47.395162+00', '2023-12-17 17:54:47.395162+00', '{"eTag": "\"5415ab1b12bb9ad59b6e5bf24740c898\"", "size": 20336, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 20336, "httpStatusCode": 200}', 'b0d4b0ec-3780-4bd8-9c3a-31826f366d03', NULL),
	('4d40d60e-f85b-4cbb-ba3b-348c8f3c772b', 'www', 'avatars/avatar-07-d-a-v-i-d-s-o-n-l-u-n-a-unsplash.jpg', NULL, '2023-12-17 17:54:47.397631+00', '2023-12-17 17:54:47.397631+00', '2023-12-17 17:54:47.397631+00', '{"eTag": "\"40e9202edea1d32b7b9686e41a679bd9\"", "size": 17984, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 17984, "httpStatusCode": 200}', '984a479a-04a4-4c87-b8e9-f41ae218e044', NULL),
	('e5503071-f0e2-47cf-905f-e8efdcac0801', 'www', 'avatars/avatar-09-christina-wocintechchat-com-unsplash.jpg', NULL, '2023-12-17 17:54:47.400369+00', '2023-12-17 17:54:47.400369+00', '2023-12-17 17:54:47.400369+00', '{"eTag": "\"b2a87b355b1f4edacec39a4bb4ad0558\"", "size": 25036, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 25036, "httpStatusCode": 200}', 'f0e61909-94c8-4dd6-9b91-64374a7b172f', NULL),
	('f553e8c1-e0ea-4cf7-bca9-aa1888965665', 'www', 'avatars/avatar-01-philip-martin-unsplash.jpg', NULL, '2023-12-17 17:54:47.411472+00', '2023-12-17 17:54:47.411472+00', '2023-12-17 17:54:47.411472+00', '{"eTag": "\"9721e7ae01555f2d8c6c7a07d373ae98\"", "size": 11859, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 11859, "httpStatusCode": 200}', 'c148ebe0-69dd-481d-812d-fd1f2920fadd', NULL),
	('2a5d2ee8-9efb-4a48-b49e-96c5a1d087ca', 'www', 'avatars/avatar-04-michael-dam-unsplash.jpg', NULL, '2023-12-17 17:54:47.415827+00', '2023-12-17 17:54:47.415827+00', '2023-12-17 17:54:47.415827+00', '{"eTag": "\"3e221c1aa0e1c949b8e348ceb65d601b\"", "size": 13699, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 13699, "httpStatusCode": 200}', '1a7bc22d-2c3b-4306-8965-b3ce4df7e95d', NULL),
	('086b52a7-d40d-417b-84b6-9efb95dd7b29', 'www', 'avatars/avatar-03-gelmis-bartulis-unsplash.jpg', NULL, '2023-12-17 17:54:47.412226+00', '2023-12-17 17:54:47.412226+00', '2023-12-17 17:54:47.412226+00', '{"eTag": "\"d731cb5f7d5e653a96c9afc065e228f5\"", "size": 14224, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 14224, "httpStatusCode": 200}', '130ee8f3-de1a-4981-b678-d2095b3b0872', NULL),
	('a5b50de2-acdf-4585-9bae-352e417983c2', 'www', 'avatars/avatar-02-jonathan-borba-unsplash.jpg', NULL, '2023-12-17 17:54:47.419786+00', '2023-12-17 17:54:47.419786+00', '2023-12-17 17:54:47.419786+00', '{"eTag": "\"b77489d0a288432bde43a8e8e26d19ca\"", "size": 12889, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 12889, "httpStatusCode": 200}', '01c9e00c-7f09-46df-8eac-6153841f5059', NULL),
	('bfd20fd4-fbe4-47f6-84e6-a3e267ff92c7', 'www', 'avatars/avatar-05-andrey-zvyagintsev-unsplash.jpg', NULL, '2023-12-17 17:54:47.429396+00', '2023-12-17 17:54:47.429396+00', '2023-12-17 17:54:47.429396+00', '{"eTag": "\"e7f5cd79484547ff292462e71ab88a0d\"", "size": 17742, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-17T17:54:48.000Z", "contentLength": 17742, "httpStatusCode": 200}', 'd87dbf10-34b1-4ddd-8e5d-1c8e7cf275db', NULL);


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
