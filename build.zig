const std = @import("std");

pub fn build(b: *std.Build) void {
    const install_static = b.addInstallDirectory(.{ .source_dir = .{ .path = "static" }, .install_dir = .{ .prefix = {} }, .install_subdir = "" });
    b.getInstallStep().dependOn(&install_static.step);
}
