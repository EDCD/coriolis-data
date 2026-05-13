#4.0.5
  * Fixed fuelmul for the v1 SCO drive

#4.0.4
  * Lynx Highliner tonnage was set to 250, should have been 260

#4.0.3
  * Removing the risk of merge conflicts during promotions to environments

#4.0.2
  * Removed last checkout@v4 action from workflow

#4.0.1
  * Workflow fix to using Github API rather than CLI for release creation

#4.0.0
  * Workflow upgrade for QoL when passing code up the branches to deploy

#2.5.1
  * AX Modules
  * Fixed some engineering values

#2.5.0
  * Willyb321 fixed engineering. Some stuff doesn't work. We currently believe this is FDevs fault and not ours.

#2.4.3
  * T10 Defender

#2.4.2
  * Add requirements to UI
  * Fix for limpets

#2.4.1
  * Config Fix

#2.4.0
  * Added Repair Limpet Computers

#2.3.7
  * Fixed Orca mass-lock

#2.3.5
  * Fix list of available blueprints for Point Defence
  * Fix integrity values for class 6 power plants
  * Add shot speed for long range weapon
  * Fix components for dirty drive grade 3
  * Update values for Cytoscrambler
  * Add shotspeed modifier to cannon/multi-cannon/fragment cannon

#2.3.4
  * Add missing Long Range blueprint to multi-cannon
  * Fix values for thermal load of focused weapon grade 4
  * Fix internal module information for power plant blueprints
  * Add 'FSD Interrupt' special to dumbfire missile racks; this module now has `specials_S` and `specials_D` keys for specials to differentiate

#2.3.3
  * Add Felicity Farseer to list of engineers that supply sensor and detailed surface scanner modifications

#2.3.2
  * Update ownership of module blueprints for sensors and scanners
  * Update railgun penetration

#2.3.1
  * Separate scan time and scan range
  * Add Frontier IDs for new items in 2.3

#2.3.0
  * Add Dolphin
  * Add turreted mining lasers
  * Add long range / wide angle / fast scan scanner blueprints
  * Fix EDDB IDs for class 5 and 7 fighter hangars for correct shopping list
  * Fix cost for rocket-propelled FSD disruptor
  * Add module names for blueprints
  * Fix erroneous value for grade 5 kinetic shield booster
  * Add missing integrity values for some modules
  * Update module reinforcement package integrity
  * Update specs of Beluga as per 2.3
  * Update specs of Asp Scout as per 2.3
  * Update specs of Diamondback Explorer as per 2.3
  * Add ED ID for Rocket Propelled FSD Disruptor
  * Fix ED name for target lock breaker special
  * Update scan range and angle information for sensors
  * Tidy up shield cell bank information to allow for accurate calculations with modifications
  * Update mine launcher stats
  * Add appropriate engineers to per-module blueprint information

#2.2.19
  * Remove shot speed modification - it is directly tied to range
  * Fix incorrect minimal mass for 3C bi-weave shield generator

#2.2.18
  * Correct lower efficiency value to be better, not worse

#2.2.17
  * Add mass as potential SCB modification
  * Fix mining laser statistics
  * Remove non-existent grade 4 and 5 wake scanner modifications
  * Add number of crew for each ship

#2.2.16
  * Fix incorrect thermal load modifiers for dirty drives
  * Provide explicit information about if values are higher numeric value == better or not

#2.2.15
  * Fix location of initial cargo rack for Vulture
  * Fix broken regeneration rate for 6B shield generators
  * Tidy up breach damage values

#2.2.14
  * Alter blueprint structure to combine components and features
  * Make hidden value of modifications its own attribute
  * Fix incorrect ED ID for class 6 passenger cabins

#2.2.13
  * Add plasma slug special effect for plasma accelerator
  * Tweak hull costs of ships

#2.2.12
  * Add special effects for each blueprint
  * Add IDs for most Powerplay modules

#2.2.11
  * Remove non-existant chaff launcher capacity blueprint grades
  * Fix incorrect values for charge enhanced power distributor
  * Remove incorrect AFMU blueprints
  * Correct fragment cannon Double Shot blueprint information
  * Correct Focused weapon blueprint information

#2.2.10
  * Fix incorrect base shield values for Cutter and Corvette
  * Update weapons to have %-based damage distributions
  * Remove power draw for detailed surface scanner - although shown in outfitting it is not part of active power
  * Fix incorrect names for lightweight and kinetic armour
  * Add engineering blueprints

#2.2.9
  * Add falloff metric for weapons
  * Add falloff from range modification

#2.2.8
  * Set military slot of Viper Mk IV to class 3; was incorrectly set as class 2
  * Update base regeneration rate of prismatic shield generators to values in 2.2.03
  * Update specials with information in 2.2.03

#2.2.6
  * Update weapons with changed values for 2.2.03
  * Add individual pitch/roll/yaw statistics for each ship
  * Remove old and meaningless agility stat
  * Use sane order for multi-module JSON - coriolis can re-order as it sees fit when displaying modules
  * Fix cost of fighter hangars
  * Update Powerplay weapons with current statistics
  * Add separate min/opt/max multipliers for enhanced thrusters for speed, acceleration and rotation
  * Add module reinforcement packages
  * Add military compartments
  * Fix missing damage value for 2B dumbfires
  * Update shield recharge rates
  * Reduce hull mass of Viper to 50T
  * Fix incorrect optimal mass value for 8A thrusters
  * Add power draw for detailed surface scanner

#2.2.5
  * Fix incorrect ID for emissive munitions special
  * Fix rate of fire for burst lasers
  * Add fragment cannon modifications
  * Fix internal name of dazzle shell

#2.2.4
  * Fix incorrect ID for class 5 luxury passenger cabin
  * Add damage type modifier
  * Change modifications from simple strings to objects, to allow more data-driven behaviour
  * Add special effects

#2.2.3
  * Fix mismatch between class 5 and class 7 fighter hangars
  * Add details for concordant sequence special effect
  * Fix details for thermal shock special effect
  * Add engineer blueprints

#2.2.2
  * Add distributor draw modifier to shield generators
  * Remove modifiers for sensors
  * Add initial loadout passenger cabins for Beluga
  * Add initial loadout passenger cabins for Orca
  * Update costs and initial loadouts for Keelback and Type-7
  * Add resistances for hull reinforcement packages
  * Added modifier actions to create modifications from raw data
