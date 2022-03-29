#!/bin/sh

set -eu

# build frontend
yarn build

# build backend
mage -v

#pack
plugin_id="ksc-cloudmonitor-app"

# check if zip file exists
version="$(jq -r '.info.version' 'dist/plugin.json')"

if test -f "${plugin_id}-${version}.zip"
then
	printf >&2 'File already exists: %s\n' "${plugin_id}-${version}.zip"
	exit 1
fi

# bundle zip file
tmp="$(mktemp -d)"
cp -r -- dist "${tmp}/${plugin_id}"

(
	cd -- "$tmp"
	zip -qr "${plugin_id}-${version}.zip" -- "${plugin_id}"
)

mv -- "$tmp/${plugin_id}-${version}.zip" .
