create table "public"."services_items" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "service_type" uuid not null,
    "title" text not null,
    "description" text not null,
    "material" text,
    "employee" uuid,
    "price" numeric not null,
    "currency" text not null
);


alter table "public"."services_items" enable row level security;

create table "public"."services_types" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "title" text not null,
    "description" text[] not null
);


alter table "public"."services_types" enable row level security;

create table "public"."team" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "surname" text not null,
    "avatar" text not null,
    "specialization" text not null,
    "degree" text not null,
    "description" text[] not null,
    "biography" text[] not null
);


alter table "public"."team" enable row level security;

CREATE UNIQUE INDEX services_items_pkey ON public.services_items USING btree (id);

CREATE UNIQUE INDEX services_types_pkey ON public.services_types USING btree (id);

CREATE UNIQUE INDEX team_pkey ON public.team USING btree (id);

alter table "public"."services_items" add constraint "services_items_pkey" PRIMARY KEY using index "services_items_pkey";

alter table "public"."services_types" add constraint "services_types_pkey" PRIMARY KEY using index "services_types_pkey";

alter table "public"."team" add constraint "team_pkey" PRIMARY KEY using index "team_pkey";

alter table "public"."services_items" add constraint "services_items_employee_fkey" FOREIGN KEY (employee) REFERENCES team(id) not valid;

alter table "public"."services_items" validate constraint "services_items_employee_fkey";

alter table "public"."services_items" add constraint "services_items_service_type_fkey" FOREIGN KEY (service_type) REFERENCES services_types(id) not valid;

alter table "public"."services_items" validate constraint "services_items_service_type_fkey";

grant delete on table "public"."services_items" to "anon";

grant insert on table "public"."services_items" to "anon";

grant references on table "public"."services_items" to "anon";

grant select on table "public"."services_items" to "anon";

grant trigger on table "public"."services_items" to "anon";

grant truncate on table "public"."services_items" to "anon";

grant update on table "public"."services_items" to "anon";

grant delete on table "public"."services_items" to "authenticated";

grant insert on table "public"."services_items" to "authenticated";

grant references on table "public"."services_items" to "authenticated";

grant select on table "public"."services_items" to "authenticated";

grant trigger on table "public"."services_items" to "authenticated";

grant truncate on table "public"."services_items" to "authenticated";

grant update on table "public"."services_items" to "authenticated";

grant delete on table "public"."services_items" to "service_role";

grant insert on table "public"."services_items" to "service_role";

grant references on table "public"."services_items" to "service_role";

grant select on table "public"."services_items" to "service_role";

grant trigger on table "public"."services_items" to "service_role";

grant truncate on table "public"."services_items" to "service_role";

grant update on table "public"."services_items" to "service_role";

grant delete on table "public"."services_types" to "anon";

grant insert on table "public"."services_types" to "anon";

grant references on table "public"."services_types" to "anon";

grant select on table "public"."services_types" to "anon";

grant trigger on table "public"."services_types" to "anon";

grant truncate on table "public"."services_types" to "anon";

grant update on table "public"."services_types" to "anon";

grant delete on table "public"."services_types" to "authenticated";

grant insert on table "public"."services_types" to "authenticated";

grant references on table "public"."services_types" to "authenticated";

grant select on table "public"."services_types" to "authenticated";

grant trigger on table "public"."services_types" to "authenticated";

grant truncate on table "public"."services_types" to "authenticated";

grant update on table "public"."services_types" to "authenticated";

grant delete on table "public"."services_types" to "service_role";

grant insert on table "public"."services_types" to "service_role";

grant references on table "public"."services_types" to "service_role";

grant select on table "public"."services_types" to "service_role";

grant trigger on table "public"."services_types" to "service_role";

grant truncate on table "public"."services_types" to "service_role";

grant update on table "public"."services_types" to "service_role";

grant delete on table "public"."team" to "anon";

grant insert on table "public"."team" to "anon";

grant references on table "public"."team" to "anon";

grant select on table "public"."team" to "anon";

grant trigger on table "public"."team" to "anon";

grant truncate on table "public"."team" to "anon";

grant update on table "public"."team" to "anon";

grant delete on table "public"."team" to "authenticated";

grant insert on table "public"."team" to "authenticated";

grant references on table "public"."team" to "authenticated";

grant select on table "public"."team" to "authenticated";

grant trigger on table "public"."team" to "authenticated";

grant truncate on table "public"."team" to "authenticated";

grant update on table "public"."team" to "authenticated";

grant delete on table "public"."team" to "service_role";

grant insert on table "public"."team" to "service_role";

grant references on table "public"."team" to "service_role";

grant select on table "public"."team" to "service_role";

grant trigger on table "public"."team" to "service_role";

grant truncate on table "public"."team" to "service_role";

grant update on table "public"."team" to "service_role";

create policy "Enable read access for all users"
on "public"."services_items"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."services_types"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."team"
as permissive
for select
to public
using (true);



