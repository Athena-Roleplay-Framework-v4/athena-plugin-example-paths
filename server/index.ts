import * as alt from 'alt-server';
import { Athena } from '@AthenaServer/api/athena';
import { command } from '@AthenaServer/decorators/commands';
import { PluginSystem } from '@AthenaServer/systems/plugins';
import { PERMISSIONS } from '@AthenaShared/flags/permissionFlags';
const PLUGIN_NAME = 'Athena Roleplay Commands';

class Commands {
    @command('testextrasound', '/testextrasound', PERMISSIONS.ADMIN)
    private static testExtraSound(player: alt.Player) {
        Athena.player.emit.sound2D(player, `@plugins/sounds/example-extras/test.ogg`);
    }
}

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    console.log('Extras Folder Tests Loaded');
});
