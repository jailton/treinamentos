#!/bin/bash

pvcreate /dev/sdc
pvcreate /dev/sdd
pvcreate /dev/sde
pvcreate /dev/sdf
pvcreate /dev/sdg
pvcreate /dev/sdh
pvcreate /dev/sdi
pvcreate /dev/sdj

vgcreate vg_hana_data /dev/sdc /dev/sdd
vgcreate vg_hana_log /dev/sde /dev/sdf
vgcreate vg_hana_backup /dev/sdg /dev/sdh
vgcreate vg_hana_shared /dev/sdi
vgcreate vg_usr_sap /dev/sdj

lvcreate -l 100%FREE -n hana_data vg_hana_data
lvcreate -l 100%FREE -n hana_log vg_hana_log
lvcreate -l 100%FREE -n hana_backup vg_hana_backup
lvcreate -l 100%FREE -n hana_shared vg_hana_shared
lvcreate -l 100%FREE -n usr_sap vg_usr_sap

mkfs.xfs /dev/vg_hana_data/hana_data -m crc=1
mkfs.xfs /dev/vg_hana_log/hana_log -m crc=1
mkfs.xfs /dev/vg_hana_backup/hana_backup -m crc=1
mkfs.xfs /dev/vg_hana_shared/hana_shared -m crc=1
mkfs.xfs /dev/vg_usr_sap/usr_sap -m crc=1

mkdir -p /hana/data
mkdir -p /hana/log
mkdir -p /hana/backup
mkdir -p /hana/shared
mkdir -p /usr/sap


