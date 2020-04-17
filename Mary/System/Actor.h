#pragma once
#include "../../Core/Core.h"

#include "../Config.h"
#include "../Internal.h"
#include "../Vars.h"

#include "File.h"

#include "../Cosmetics/Color.h"
#include "../Cosmetics/Model.h"

template <typename T, uint32 n>
struct vector
{
	uint32 count;
	T data[n];
	void Push(T var)
	{
		data[count] = var;
		count++;
	}
	void Clear()
	{
		memset(this, 0, sizeof(*this));
	}
	void operator+=(T var)
	{
		Push(var);
	}
	T & operator[](uint32 index)
	{
		return data[index];
	}
	vector()
	{
		Clear();
	}
};

extern vector<byte8 *, 128> System_Actor_actorBaseAddr;

byte8 * CreateActor
(
	uint8 character,
	uint8 actor
);

void System_Actor_Init();



void ToggleUpdateWeapon(bool enable);

//void UpdateStyleIconDante(ACTOR_DATA_DANTE & actorData, uint8 style);

void UpdateStyleIcon
(
	uint8 style,
	byte8 * model,
	byte8 * texture
);


void UpdateWeaponIcon(uint8 index, byte8 * model, byte8 * texture);

struct HUDIconHelper
{
	byte8 * model;
	byte8 * texture;
};

//HUDIconHelper hudIconHelper


extern HUDIconHelper styleIconDante[MAX_STYLE];
extern HUDIconHelper styleIconVergil[MAX_STYLE];
extern HUDIconHelper weaponIcon[MAX_WEAPON];



void Reset(uint32 off);




